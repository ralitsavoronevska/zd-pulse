// Tests for `applyMockedTicketFilters` — mock-mode's single-pass filter loop.
//
// Every mock-mode filter goes through this function; in API mode the
// equivalent runs server-side. Coverage strategy: a small fixture (5
// tickets) hand-built so each filter type can isolate exactly one
// expected match. Keeps the assertions short and the cause of any
// failure obvious.

import { describe, it, expect } from 'vitest';
import { applyMockedTicketFilters } from './mockedTicketFilters';

// Helpers
const D = (iso) => new Date(iso);

// Fixture: 5 tickets, each distinct enough to be uniquely matched by a
// targeted filter. Timestamps spread across one week so date-range tests
// have meaningful boundaries. `chat_tags` is the array form (what
// `applyMockedTicketFilters` reads with `.includes`); `_chatTagsString`
// is the lowercased+sorted concatenation used by other code paths and
// not actually consulted here for tag matching.
const TICKETS = [
    {
        ticketid: 1001,
        topic: 'Game Issue',
        brand: 'Aruba Bet',
        vip_level: 'gold',
        customer_email: 'alice@example.com',
        agent_email: 'bob@support.com',
        csat_score: 'good',
        sentiment: 'positive',
        sentiment_reason: 'Customer received a quick resolution',
        summary: 'compliance: ok — fast handling',
        chat_transcript: 'Hello, my game is broken',
        email_transcript: '',
        chat_tags: ['urgent', 'agent_required'],
        _chatTagsString: 'agent_required, urgent',
        timestamp: D('2026-04-01T10:00:00Z'),
        started_at: D('2026-04-01T09:55:00Z'),
        updated_at: D('2026-04-01T10:30:00Z')
    },
    {
        ticketid: 1002,
        topic: 'Bonus Issue',
        brand: 'BetRiot VIP',
        vip_level: 'platinum',
        customer_email: 'CHARLIE@example.com', // mixed case for case-insensitive test
        agent_email: 'diana@support.com',
        csat_score: 'bad',
        sentiment: 'very negative',
        sentiment_reason: 'Bonus not credited',
        summary: 'compliance: issue — slow response',
        chat_transcript: '',
        email_transcript: 'Where is my bonus?',
        chat_tags: ['vip_general_query', 'bonus_related'],
        _chatTagsString: 'bonus_related, vip_general_query',
        timestamp: D('2026-04-03T12:00:00Z'),
        started_at: D('2026-04-03T11:50:00Z'),
        updated_at: D('2026-04-03T13:00:00Z')
    },
    {
        ticketid: 1003,
        topic: 'Game Issue',
        brand: 'Aruba Bet',
        vip_level: 'normal',
        customer_email: 'eve@example.com',
        agent_email: 'frank@support.com',
        csat_score: 'unoffered',
        sentiment: 'neutral',
        sentiment_reason: 'No follow-up requested',
        summary: 'compliance not assessed',
        chat_transcript: 'I need help with the slot',
        email_transcript: '',
        chat_tags: ['internal_request'],
        _chatTagsString: 'internal_request',
        timestamp: D('2026-04-05T08:00:00Z'),
        started_at: null,
        updated_at: null
    },
    {
        ticketid: 1004,
        topic: 'Free Bonus Request',
        brand: 'BetRiot VIP',
        vip_level: 'visitor',
        customer_email: 'guest@example.com',
        agent_email: 'henry@support.com',
        csat_score: 'good',
        sentiment: 'positive',
        sentiment_reason: 'Free bonus granted',
        summary: 'compliance: ok',
        chat_transcript: 'Free bonus please',
        email_transcript: '',
        chat_tags: ['marketing_related', 'normal'],
        _chatTagsString: 'marketing_related, normal',
        timestamp: D('2026-04-07T14:00:00Z'),
        started_at: D('2026-04-07T13:50:00Z'),
        updated_at: D('2026-04-07T14:30:00Z')
    },
    {
        ticketid: 1005,
        topic: 'Game Issue',
        brand: 'Convergence Casino',
        vip_level: 'silver',
        customer_email: 'isaac@example.com',
        agent_email: 'jane@support.com',
        csat_score: 'good',
        sentiment: 'very positive',
        sentiment_reason: 'Excellent service',
        summary: 'no compliance keyword present',
        chat_transcript: 'thanks for the help',
        email_transcript: '',
        chat_tags: ['vip_related', 'platinum'],
        _chatTagsString: 'platinum, vip_related',
        timestamp: D('2026-04-08T16:00:00Z'),
        started_at: D('2026-04-08T15:55:00Z'),
        updated_at: D('2026-04-08T16:15:00Z')
    }
];

// ════════════════════════════════════════════════════════════════════════
//  No-op / passthrough behaviour
// ════════════════════════════════════════════════════════════════════════
describe('applyMockedTicketFilters — no-op', () => {
    it('returns all rows when params is empty', () => {
        expect(applyMockedTicketFilters(TICKETS, {}).length).toBe(TICKETS.length);
    });

    it('returns all rows when params is omitted entirely', () => {
        expect(applyMockedTicketFilters(TICKETS).length).toBe(TICKETS.length);
    });

    it('returns a NEW array (does not mutate input)', () => {
        const result = applyMockedTicketFilters(TICKETS, {});
        expect(result).not.toBe(TICKETS);
    });

    it('returns empty array for empty input', () => {
        expect(applyMockedTicketFilters([], { brand: ['Aruba Bet'] })).toEqual([]);
    });
});

// ════════════════════════════════════════════════════════════════════════
//  Exact-match filters
// ════════════════════════════════════════════════════════════════════════
describe('applyMockedTicketFilters — exact-match filters', () => {
    it('filters by ticketid (string compared to numeric ticketid)', () => {
        const out = applyMockedTicketFilters(TICKETS, { ticketid: '1003' });
        expect(out.length).toBe(1);
        expect(out[0].ticketid).toBe(1003);
    });

    it('filters by csat_score exact match', () => {
        const out = applyMockedTicketFilters(TICKETS, { csat_score: 'good' });
        // 1001, 1004, 1005 are good
        expect(out.map((t) => t.ticketid).sort()).toEqual([1001, 1004, 1005]);
    });

    it('filters by sentiment with case + whitespace tolerance', () => {
        // The filter lowercases sentiment before comparing — verify against
        // a multi-word value to catch any "trim only first word" regression.
        const out = applyMockedTicketFilters(TICKETS, { sentiment: '  Very Negative  ' });
        expect(out.map((t) => t.ticketid)).toEqual([1002]);
    });
});

// ════════════════════════════════════════════════════════════════════════
//  Multi-select filters
// ════════════════════════════════════════════════════════════════════════
describe('applyMockedTicketFilters — multiselect filters', () => {
    it('filters by brand (multi)', () => {
        const out = applyMockedTicketFilters(TICKETS, { brand: ['Aruba Bet', 'Convergence Casino'] });
        expect(out.map((t) => t.ticketid).sort()).toEqual([1001, 1003, 1005]);
    });

    it('filters by topic (multi, via Set)', () => {
        const out = applyMockedTicketFilters(TICKETS, { topic: ['Game Issue'] });
        expect(out.map((t) => t.ticketid).sort()).toEqual([1001, 1003, 1005]);
    });

    it('filters by vip_level (multi)', () => {
        const out = applyMockedTicketFilters(TICKETS, { vip_level: ['gold', 'platinum'] });
        expect(out.map((t) => t.ticketid).sort()).toEqual([1001, 1002]);
    });

    it('filters by customer_email — case-insensitive substring includes', () => {
        // CHARLIE is uppercase in the fixture; the filter normalizes both
        // sides to lowercase. Use partial substring to confirm includes
        // semantics (not exact match).
        const out = applyMockedTicketFilters(TICKETS, { customer_email: ['charlie'] });
        expect(out.map((t) => t.ticketid)).toEqual([1002]);
    });

    it('filters by agent_email — case-insensitive substring includes', () => {
        const out = applyMockedTicketFilters(TICKETS, { agent_email: ['BOB', 'Diana'] });
        expect(out.map((t) => t.ticketid).sort()).toEqual([1001, 1002]);
    });

    it('filters by chat tags (any-of via _chatTagsString param + chat_tags array)', () => {
        // Note: the filter reads `_chatTagsString` from params (driver) but
        // matches against `item.chat_tags` (the array). Tags are matched
        // by `item.chat_tags?.includes(tag)`.
        const out = applyMockedTicketFilters(TICKETS, { _chatTagsString: ['urgent', 'marketing_related'] });
        expect(out.map((t) => t.ticketid).sort()).toEqual([1001, 1004]);
    });

    it('treats empty multiselect arrays as no-op (returns everything)', () => {
        const out = applyMockedTicketFilters(TICKETS, { brand: [], topic: [], vip_level: [] });
        expect(out.length).toBe(TICKETS.length);
    });
});

// ════════════════════════════════════════════════════════════════════════
//  Text-contains filters
// ════════════════════════════════════════════════════════════════════════
describe('applyMockedTicketFilters — text-contains filters', () => {
    it('filters by sentiment_reason substring (case-insensitive)', () => {
        const out = applyMockedTicketFilters(TICKETS, { sentiment_reason: 'BONUS' });
        expect(out.map((t) => t.ticketid).sort()).toEqual([1002, 1004]);
    });

    it('filters by chat_transcript substring', () => {
        const out = applyMockedTicketFilters(TICKETS, { chat_transcript: 'slot' });
        expect(out.map((t) => t.ticketid)).toEqual([1003]);
    });

    it('filters by email_transcript substring', () => {
        const out = applyMockedTicketFilters(TICKETS, { email_transcript: 'bonus' });
        expect(out.map((t) => t.ticketid)).toEqual([1002]);
    });

    it('filters by summary substring', () => {
        const out = applyMockedTicketFilters(TICKETS, { summary: 'compliance: ok' });
        // 1001 and 1004 both contain 'compliance: ok'
        expect(out.map((t) => t.ticketid).sort()).toEqual([1001, 1004]);
    });
});

// ════════════════════════════════════════════════════════════════════════
//  Global search
// ════════════════════════════════════════════════════════════════════════
describe('applyMockedTicketFilters — global search', () => {
    it('matches the global filter against ticketid, topic, brand, sentiment_reason, etc.', () => {
        // 'aruba' appears in brand for tickets 1001 and 1003.
        const out = applyMockedTicketFilters(TICKETS, { globalFilter: 'aruba' });
        expect(out.map((t) => t.ticketid).sort()).toEqual([1001, 1003]);
    });

    it('matches transcript content', () => {
        const out = applyMockedTicketFilters(TICKETS, { globalFilter: 'thanks' });
        expect(out.map((t) => t.ticketid)).toEqual([1005]);
    });

    it('builds the search index lazily on first global-filter use (perf optimization)', () => {
        // Strip `_mockedSearchIndex` if any earlier test mutated TICKETS —
        // `applyMockedTicketFilters` writes the cached index back onto the
        // input rows, and our fixture is shared across the suite.
        const fixture = TICKETS.map(({ _mockedSearchIndex, ...rest }) => rest);
        // Sanity check: index should not exist yet on the fresh copy.
        expect(fixture[0]._mockedSearchIndex).toBeUndefined();
        applyMockedTicketFilters(fixture, { globalFilter: 'support' });
        // After global-filter use, the index is materialized on every row.
        expect(typeof fixture[0]._mockedSearchIndex).toBe('string');
        expect(fixture[0]._mockedSearchIndex.length).toBeGreaterThan(0);
    });
});

// ════════════════════════════════════════════════════════════════════════
//  Date ranges (timestamp / started_at / updated_at)
// ════════════════════════════════════════════════════════════════════════
describe('applyMockedTicketFilters — date ranges', () => {
    it('filters by timestamp range (startDate inclusive, endDate exclusive)', () => {
        // Window covers 2026-04-03 through 2026-04-07 inclusive.
        const out = applyMockedTicketFilters(TICKETS, {
            startDate: D('2026-04-03T00:00:00Z'),
            endDate: D('2026-04-08T00:00:00Z')
        });
        // Tickets 1002 (Apr 3), 1003 (Apr 5), 1004 (Apr 7) match.
        // 1001 (Apr 1) is before the window. 1005 (Apr 8) — its timestamp
        // is exactly endDate, which is EXCLUSIVE → excluded.
        expect(out.map((t) => t.ticketid).sort()).toEqual([1002, 1003, 1004]);
    });

    it('startDate alone defines an open-ended lower bound', () => {
        const out = applyMockedTicketFilters(TICKETS, { startDate: D('2026-04-05T00:00:00Z') });
        expect(out.map((t) => t.ticketid).sort()).toEqual([1003, 1004, 1005]);
    });

    it('endDate alone defines an open-ended upper bound', () => {
        const out = applyMockedTicketFilters(TICKETS, { endDate: D('2026-04-04T00:00:00Z') });
        expect(out.map((t) => t.ticketid).sort()).toEqual([1001, 1002]);
    });

    it('filters by started_at range', () => {
        // Only 1001, 1002, 1004, 1005 have started_at; 1003 has null and
        // should be EXCLUDED when the filter is active.
        const out = applyMockedTicketFilters(TICKETS, {
            startedAtStart: D('2026-04-03T00:00:00Z'),
            startedAtEnd: D('2026-04-08T00:00:00Z')
        });
        expect(out.map((t) => t.ticketid).sort()).toEqual([1002, 1004]);
    });

    it('filters by updated_at range — null values are excluded when filter is active', () => {
        const out = applyMockedTicketFilters(TICKETS, {
            updatedAtStart: D('2026-04-01T00:00:00Z')
        });
        // 1003 has null updated_at → excluded.
        expect(out.map((t) => t.ticketid).sort()).toEqual([1001, 1002, 1004, 1005]);
    });
});

// ════════════════════════════════════════════════════════════════════════
//  Filter combinations (AND semantics)
// ════════════════════════════════════════════════════════════════════════
describe('applyMockedTicketFilters — combinations', () => {
    it('combines multiple filters with AND semantics', () => {
        const out = applyMockedTicketFilters(TICKETS, {
            topic: ['Game Issue'],
            csat_score: 'good',
            brand: ['Aruba Bet']
        });
        // Game Issue + good + Aruba Bet → 1001 only (1003 is unoffered, 1005 is Convergence Casino).
        expect(out.map((t) => t.ticketid)).toEqual([1001]);
    });

    it('returns empty array when filters intersect to nothing', () => {
        const out = applyMockedTicketFilters(TICKETS, {
            brand: ['Aruba Bet'],
            vip_level: ['platinum'] // No Aruba ticket is platinum.
        });
        expect(out).toEqual([]);
    });
});
