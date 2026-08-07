// Param-builder unit tests for `src/services/ticketApi.js`.
//
// These are the highest-ROI tests in the repo: every backend request flows
// through one of seven `build*Params` functions, each with a different
// inclusion matrix (which filters the corresponding endpoint actually
// honors). The 95ac7ff revert was caused by a builder change that drifted
// out of step with the endpoint contract — exactly the failure mode this
// file guards against.
//
// Strategy: test each builder against the three things that matter — what
// it MUST include, what it MUST omit, and how it shapes special-case
// fields (arrays, ticketid, pagination). Date assertions match prefix-only
// (`/^2026-04-01T/`) so the runner's local TZ doesn't make the suite flake.

import { describe, it, expect } from 'vitest';
import { buildTicketListParams, buildFacetedFilterOptionsParams, buildNarrowedFilterOptionsParams, buildStatsParams, buildTopicChartParams, buildVipCsatParams, buildExportParams, isExportBlocked } from './ticketApi';

const DAY_START = new Date('2026-04-01T00:00:00Z');
const DAY_END = new Date('2026-04-02T00:00:00Z');

const MINIMAL_FILTERS = {
    startDate: DAY_START,
    endDate: DAY_END
};

// "Full filters" exercises every input the seven builders collectively read.
// Individual builders only consume a subset; that's the point — we assert
// the subset boundary in each suite.
const FULL_FILTERS = Object.freeze({
    startDate: DAY_START,
    endDate: DAY_END,
    startedAtStart: DAY_START,
    startedAtEnd: DAY_END,
    updatedAtStart: DAY_START,
    updatedAtEnd: DAY_END,
    brand: ['Aruba', 'BetRiot'],
    topic: ['Game Issue'],
    vip_level: ['gold'],
    customer_email: ['user@example.com'],
    agent_email: ['agent@support.com'],
    _chatTagsString: ['urgent'],
    csat_score: 'good',
    sentiment: 'positive',
    sentiment_reason: 'satisfaction',
    chat_transcript: 'thanks',
    email_transcript: 'received',
    summary: 'compliance:ok',
    globalFilter: 'support',
    ticketid: null
});

const LAZY = { page: 2, rows: 50, sortField: 'timestamp', sortOrder: -1 };

// ════════════════════════════════════════════════════════════════════════
//  buildTicketListParams — the everything-and-the-kitchen-sink builder
// ════════════════════════════════════════════════════════════════════════
describe('buildTicketListParams', () => {
    it('serializes timestamps in ISO-8601-with-offset format', () => {
        const params = buildTicketListParams(MINIMAL_FILTERS, {});
        // Date prefix must match regardless of runner TZ. Suffix is `±HH:MM`.
        expect(params.timestamp_gte).toMatch(/^2026-04-01T\d{2}:\d{2}:\d{2}[+-]\d{2}:\d{2}$/);
        expect(params.timestamp_lt).toMatch(/^2026-04-02T\d{2}:\d{2}:\d{2}[+-]\d{2}:\d{2}$/);
    });

    it('returns empty object for empty filters + empty lazyParams', () => {
        expect(buildTicketListParams({}, {})).toEqual({});
    });

    it('threads every attribute filter through unchanged', () => {
        const params = buildTicketListParams(FULL_FILTERS, LAZY);
        expect(params.brand).toEqual(['Aruba', 'BetRiot']);
        expect(params.topic).toEqual(['Game Issue']);
        expect(params.vip_level).toEqual(['gold']);
        expect(params.agent_email).toEqual(['agent@support.com']);
        expect(params.customer_email).toEqual(['user@example.com']);
        expect(params.chat_tags).toEqual(['urgent']);
        expect(params.csat_score).toBe('good');
        expect(params.sentiment).toBe('positive');
    });

    it('OMITS empty array filters entirely (does not send `brand=[]`)', () => {
        const params = buildTicketListParams({ ...MINIMAL_FILTERS, brand: [], topic: [], vip_level: [] }, {});
        expect(params.brand).toBeUndefined();
        expect(params.topic).toBeUndefined();
        expect(params.vip_level).toBeUndefined();
    });

    it('forwards pagination, ordering, search and text-contains booleans', () => {
        const params = buildTicketListParams(FULL_FILTERS, LAZY);
        expect(params.page).toBe(2);
        expect(params.page_size).toBe(50);
        expect(params.ordering).toBe('-timestamp');
        expect(params.search).toBe('support');
        expect(params.summary_contains).toBe(true);
        expect(params.chat_transcript_contains).toBe(true);
        expect(params.email_transcript_contains).toBe(true);
        expect(params.sentiment_reason).toBe('satisfaction');
    });

    it('serializes ascending sort without a leading minus', () => {
        const params = buildTicketListParams(MINIMAL_FILTERS, { ...LAZY, sortOrder: 1 });
        expect(params.ordering).toBe('timestamp');
    });

    it('skips pagination/ordering/search/text-contains when ticketid is set', () => {
        // The list endpoint ignores `?ticketid=` — the request is routed
        // through the detail endpoint instead. Sending pagination etc. with
        // it would be wasted bytes (and could mask backend bugs).
        const params = buildTicketListParams({ ...FULL_FILTERS, ticketid: '2147023' }, LAZY);
        expect(params.ticketid).toBe('2147023');
        expect(params.page).toBeUndefined();
        expect(params.page_size).toBeUndefined();
        expect(params.ordering).toBeUndefined();
        expect(params.search).toBeUndefined();
        expect(params.summary_contains).toBeUndefined();
        expect(params.chat_transcript_contains).toBeUndefined();
        expect(params.email_transcript_contains).toBeUndefined();
        expect(params.sentiment_reason).toBeUndefined();
        // But date + attribute filters still flow through — they're harmless
        // on the detail endpoint (it ignores them) and keep the URL stable
        // for browser caching.
        expect(params.timestamp_gte).toMatch(/^2026-04-01T/);
        expect(params.brand).toEqual(['Aruba', 'BetRiot']);
    });

    it('includes started_at and updated_at extended date params', () => {
        const params = buildTicketListParams(FULL_FILTERS, LAZY);
        expect(params.started_at_gte).toMatch(/^2026-04-01T/);
        expect(params.started_at_lt).toMatch(/^2026-04-02T/);
        expect(params.updated_at_gte).toMatch(/^2026-04-01T/);
        expect(params.updated_at_lt).toMatch(/^2026-04-02T/);
    });
});

// ════════════════════════════════════════════════════════════════════════
//  buildFacetedFilterOptionsParams — date + every attribute EXCEPT one
//  (per-field response that powers an active dropdown without self-narrowing)
// ════════════════════════════════════════════════════════════════════════
describe('buildFacetedFilterOptionsParams', () => {
    it('omits the named field while keeping every OTHER attribute filter', () => {
        const params = buildFacetedFilterOptionsParams(FULL_FILTERS, 'csat_score');
        expect(params.timestamp_gte).toMatch(/^2026-04-01T/);
        expect(params.csat_score).toBeUndefined(); // excluded
        // Every other attribute filter passes through.
        expect(params.brand).toEqual(['Aruba', 'BetRiot']);
        expect(params.topic).toEqual(['Game Issue']);
        expect(params.vip_level).toEqual(['gold']);
        expect(params.agent_email).toEqual(['agent@support.com']);
        expect(params.customer_email).toEqual(['user@example.com']);
        expect(params.chat_tags).toEqual(['urgent']);
        expect(params.sentiment).toBe('positive');
    });

    it('translates the chat_tags exclusion to the internal _chatTagsString filter key', () => {
        const params = buildFacetedFilterOptionsParams(FULL_FILTERS, 'chat_tags');
        expect(params.chat_tags).toBeUndefined();
        // Other fields untouched.
        expect(params.brand).toEqual(['Aruba', 'BetRiot']);
        expect(params.csat_score).toBe('good');
    });

    it.each(['brand', 'topic', 'vip_level', 'agent_email', 'customer_email', 'sentiment'])('excludes %s when named', (field) => {
        const params = buildFacetedFilterOptionsParams(FULL_FILTERS, field);
        expect(params[field]).toBeUndefined();
    });

    it('keeps every attribute when excludeField is undefined or unknown', () => {
        const params = buildFacetedFilterOptionsParams(FULL_FILTERS, 'not_a_field');
        expect(params.brand).toEqual(['Aruba', 'BetRiot']);
        expect(params.csat_score).toBe('good');
        expect(params.sentiment).toBe('positive');
    });

    it('OMITS text-contains, search, pagination, ordering, and extended dates', () => {
        const params = buildFacetedFilterOptionsParams(FULL_FILTERS, 'csat_score');
        expect(params.search).toBeUndefined();
        expect(params.summary_contains).toBeUndefined();
        expect(params.chat_transcript_contains).toBeUndefined();
        expect(params.email_transcript_contains).toBeUndefined();
        expect(params.sentiment_reason).toBeUndefined();
        expect(params.page).toBeUndefined();
        expect(params.ordering).toBeUndefined();
        expect(params.started_at_gte).toBeUndefined();
        expect(params.updated_at_gte).toBeUndefined();
    });

    it('returns empty object for empty filters + no exclude', () => {
        expect(buildFacetedFilterOptionsParams({}, 'brand')).toEqual({});
    });
});

// ════════════════════════════════════════════════════════════════════════
//  buildNarrowedFilterOptionsParams — date + all attributes (inactive dropdowns)
// ════════════════════════════════════════════════════════════════════════
describe('buildNarrowedFilterOptionsParams', () => {
    it('includes timestamp + every attribute filter (incl. ticketid)', () => {
        const params = buildNarrowedFilterOptionsParams({ ...FULL_FILTERS, ticketid: '999' });
        expect(params.timestamp_gte).toMatch(/^2026-04-01T/);
        expect(params.brand).toEqual(['Aruba', 'BetRiot']);
        expect(params.topic).toEqual(['Game Issue']);
        expect(params.vip_level).toEqual(['gold']);
        expect(params.agent_email).toEqual(['agent@support.com']);
        expect(params.customer_email).toEqual(['user@example.com']);
        expect(params.chat_tags).toEqual(['urgent']);
        expect(params.csat_score).toBe('good');
        expect(params.sentiment).toBe('positive');
        expect(params.ticketid).toBe('999');
    });

    it('OMITS text-contains, search, pagination, ordering', () => {
        const params = buildNarrowedFilterOptionsParams(FULL_FILTERS);
        expect(params.search).toBeUndefined();
        expect(params.summary_contains).toBeUndefined();
        expect(params.chat_transcript_contains).toBeUndefined();
        expect(params.email_transcript_contains).toBeUndefined();
        expect(params.sentiment_reason).toBeUndefined();
        expect(params.page).toBeUndefined();
        expect(params.ordering).toBeUndefined();
    });

    it('OMITS started_at / updated_at extended dates', () => {
        const params = buildNarrowedFilterOptionsParams(FULL_FILTERS);
        expect(params.started_at_gte).toBeUndefined();
        expect(params.started_at_lt).toBeUndefined();
        expect(params.updated_at_gte).toBeUndefined();
        expect(params.updated_at_lt).toBeUndefined();
    });
});

// ════════════════════════════════════════════════════════════════════════
//  buildStatsParams — same shape as narrowed filter-options
// ════════════════════════════════════════════════════════════════════════
describe('buildStatsParams', () => {
    it('includes timestamp + every attribute filter (incl. ticketid)', () => {
        const params = buildStatsParams({ ...FULL_FILTERS, ticketid: '42' });
        expect(params.timestamp_gte).toMatch(/^2026-04-01T/);
        expect(params.brand).toEqual(['Aruba', 'BetRiot']);
        expect(params.vip_level).toEqual(['gold']);
        expect(params.agent_email).toEqual(['agent@support.com']);
        expect(params.customer_email).toEqual(['user@example.com']);
        expect(params.chat_tags).toEqual(['urgent']);
        expect(params.csat_score).toBe('good');
        expect(params.sentiment).toBe('positive');
        expect(params.ticketid).toBe('42');
    });

    it('OMITS started_at / updated_at, search, text-contains, pagination', () => {
        const params = buildStatsParams(FULL_FILTERS);
        expect(params.started_at_gte).toBeUndefined();
        expect(params.updated_at_gte).toBeUndefined();
        expect(params.search).toBeUndefined();
        expect(params.summary_contains).toBeUndefined();
        expect(params.chat_transcript_contains).toBeUndefined();
        expect(params.email_transcript_contains).toBeUndefined();
        expect(params.page).toBeUndefined();
        expect(params.ordering).toBeUndefined();
    });
});

// ════════════════════════════════════════════════════════════════════════
//  buildTopicChartParams — narrower attribute set, no emails / chat_tags / ticketid
// ════════════════════════════════════════════════════════════════════════
describe('buildTopicChartParams', () => {
    it('includes timestamp + brand, topic, vip_level, csat_score, sentiment', () => {
        const params = buildTopicChartParams(FULL_FILTERS);
        expect(params.timestamp_gte).toMatch(/^2026-04-01T/);
        expect(params.brand).toEqual(['Aruba', 'BetRiot']);
        expect(params.topic).toEqual(['Game Issue']);
        expect(params.vip_level).toEqual(['gold']);
        expect(params.csat_score).toBe('good');
        expect(params.sentiment).toBe('positive');
    });

    it('OMITS agent_email, customer_email, chat_tags, ticketid', () => {
        // Endpoint ignores these — sending them would be a contract drift.
        const params = buildTopicChartParams({ ...FULL_FILTERS, ticketid: '999' });
        expect(params.agent_email).toBeUndefined();
        expect(params.customer_email).toBeUndefined();
        expect(params.chat_tags).toBeUndefined();
        expect(params.ticketid).toBeUndefined();
    });

    it('OMITS started_at / updated_at extended dates', () => {
        const params = buildTopicChartParams(FULL_FILTERS);
        expect(params.started_at_gte).toBeUndefined();
        expect(params.updated_at_gte).toBeUndefined();
    });
});

// ════════════════════════════════════════════════════════════════════════
//  buildVipCsatParams — strictest builder: only vip_level + csat_score
// ════════════════════════════════════════════════════════════════════════
describe('buildVipCsatParams', () => {
    it('includes ONLY timestamp + vip_level + csat_score', () => {
        const params = buildVipCsatParams(FULL_FILTERS);
        expect(params.timestamp_gte).toMatch(/^2026-04-01T/);
        expect(params.timestamp_lt).toMatch(/^2026-04-02T/);
        expect(params.vip_level).toEqual(['gold']);
        expect(params.csat_score).toBe('good');
    });

    it('OMITS brand, topic, sentiment, agent/customer email, chat_tags, ticketid', () => {
        const params = buildVipCsatParams({ ...FULL_FILTERS, ticketid: '7' });
        expect(params.brand).toBeUndefined();
        expect(params.topic).toBeUndefined();
        expect(params.sentiment).toBeUndefined();
        expect(params.agent_email).toBeUndefined();
        expect(params.customer_email).toBeUndefined();
        expect(params.chat_tags).toBeUndefined();
        expect(params.ticketid).toBeUndefined();
    });
});

// ════════════════════════════════════════════════════════════════════════
//  buildExportParams — superset of topic-chart + emails + chat_tags
// ════════════════════════════════════════════════════════════════════════
describe('buildExportParams', () => {
    it('includes timestamp + brand, topic, vip_level, csat_score, sentiment + emails + chat_tags', () => {
        const params = buildExportParams(FULL_FILTERS);
        expect(params.timestamp_gte).toMatch(/^2026-04-01T/);
        expect(params.brand).toEqual(['Aruba', 'BetRiot']);
        expect(params.topic).toEqual(['Game Issue']);
        expect(params.vip_level).toEqual(['gold']);
        expect(params.csat_score).toBe('good');
        expect(params.sentiment).toBe('positive');
        expect(params.agent_email).toEqual(['agent@support.com']);
        expect(params.customer_email).toEqual(['user@example.com']);
        expect(params.chat_tags).toEqual(['urgent']);
    });

    it('OMITS ticketid, search, sentiment_reason, text-contains, started_at/updated_at', () => {
        // CSV export must reflect what's on screen — but the endpoint doesn't
        // honor ticketid / text-search / extended dates, so any of those
        // active should disable export upstream (see `isExportDisabled` in
        // useTicketTableData). The builder itself just drops them.
        const params = buildExportParams({ ...FULL_FILTERS, ticketid: '5' });
        expect(params.ticketid).toBeUndefined();
        expect(params.search).toBeUndefined();
        expect(params.sentiment_reason).toBeUndefined();
        expect(params.summary_contains).toBeUndefined();
        expect(params.chat_transcript_contains).toBeUndefined();
        expect(params.email_transcript_contains).toBeUndefined();
        expect(params.started_at_gte).toBeUndefined();
        expect(params.started_at_lt).toBeUndefined();
        expect(params.updated_at_gte).toBeUndefined();
        expect(params.updated_at_lt).toBeUndefined();
        expect(params.page).toBeUndefined();
        expect(params.page_size).toBeUndefined();
    });
});

// ════════════════════════════════════════════════════════════════════════
//  isExportBlocked — UI-side mirror of buildExportParams' omit list
// ════════════════════════════════════════════════════════════════════════
//  This predicate determines whether the CSV export button is disabled.
//  It must stay in sync with `buildExportParams` — any param that builder
//  drops should make this predicate return true (otherwise the user could
//  trigger an export whose CSV doesn't match the visible table).
describe('isExportBlocked', () => {
    it('returns false for null/undefined filters (defensive)', () => {
        expect(isExportBlocked(null)).toBe(false);
        expect(isExportBlocked(undefined)).toBe(false);
    });

    it('returns false for empty filters', () => {
        expect(isExportBlocked({})).toBe(false);
    });

    it('returns false for filters the export endpoint DOES honor', () => {
        // Date range, brand, topic, vip_level, csat_score, sentiment,
        // emails, chat_tags — all pass through `buildExportParams`.
        // None of them should disable export.
        expect(
            isExportBlocked({
                startDate: DAY_START,
                endDate: DAY_END,
                brand: ['Aruba'],
                topic: ['Game Issue'],
                vip_level: ['gold'],
                csat_score: 'good',
                sentiment: 'positive',
                agent_email: ['agent@support.com'],
                customer_email: ['user@example.com'],
                _chatTagsString: ['urgent']
            })
        ).toBe(false);
    });

    it.each([
        ['ticketid', '2147023'],
        ['globalFilter', 'support'],
        ['sentiment_reason', 'satisfied'],
        ['chat_transcript', 'thanks'],
        ['email_transcript', 'received'],
        ['summary', 'compliance:ok'],
        ['startedAtStart', DAY_START],
        ['startedAtEnd', DAY_END],
        ['updatedAtStart', DAY_START],
        ['updatedAtEnd', DAY_END]
    ])('returns true when only %s is set (each blocking filter on its own)', (key, value) => {
        // Each row asserts that a SINGLE blocking filter is enough — the
        // predicate is OR, not AND. Adding rows here is the regression
        // gate when a new filter type is introduced.
        expect(isExportBlocked({ [key]: value })).toBe(true);
    });

    it('returns true when blocking filters are mixed with allowed filters', () => {
        // Real-world case: the user has an active brand filter (allowed)
        // and a global search (blocked). Export must still be blocked.
        expect(
            isExportBlocked({
                startDate: DAY_START,
                brand: ['Aruba'],
                globalFilter: 'oops'
            })
        ).toBe(true);
    });

    it('treats empty strings as not-blocking (mirrors buildExportParams truthy checks)', () => {
        // The UI may set `globalFilter: ''` rather than null when cleared.
        // Falsy values must not block.
        expect(isExportBlocked({ globalFilter: '', sentiment_reason: '', summary: '' })).toBe(false);
    });
});
