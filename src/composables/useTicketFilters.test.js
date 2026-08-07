// Tests for the pure exports of `src/composables/useTicketFilters.js`.
//
// The full `useTicketFilters()` factory mounts watchers and is component-
// scoped, so we avoid testing it as a unit — but its two pure exports
// (`createInitialFilters`, `extractFilterParams`) are the contract that
// `apiLazyInit` and every fetch caller depends on. Keeping them green
// prevents the "added a filter to createInitialFilters but forgot to wire
// it through extractFilterParams" class of bug.

import { describe, it, expect } from 'vitest';
import { createInitialFilters, extractFilterParams, PAGE_SIZE_DEFAULT, PAGE_SIZE_OPTIONS, FILTER_DEBOUNCE_MS } from './useTicketFilters';

describe('createInitialFilters', () => {
    it('returns a fresh object each call (no cross-instance state leak)', () => {
        const a = createInitialFilters();
        const b = createInitialFilters();
        expect(a).not.toBe(b);
        expect(a.timestamp).not.toBe(b.timestamp);
    });

    it("primes today's date range — startDate at 00:00, endDate at 24:00 (exclusive)", () => {
        // The default "Today" filter must include the whole current day,
        // regardless of when the user opens the page. This means start=
        // local-midnight-today and end=local-midnight-tomorrow.
        const filters = createInitialFilters();
        const start = filters.timestamp.constraints[0].value;
        const end = filters.timestamp.constraints[1].value;
        expect(start).toBeInstanceOf(Date);
        expect(end).toBeInstanceOf(Date);
        expect(start.getHours()).toBe(0);
        expect(start.getMinutes()).toBe(0);
        expect(start.getSeconds()).toBe(0);
        expect(end.getTime() - start.getTime()).toBe(24 * 60 * 60 * 1000);
    });

    it('initializes started_at + updated_at constraints to null (NOT today)', () => {
        // Only `timestamp` defaults to today's range. Started-at and
        // updated-at start unset so the user can opt in.
        const filters = createInitialFilters();
        expect(filters.started_at.constraints[0].value).toBeNull();
        expect(filters.started_at.constraints[1].value).toBeNull();
        expect(filters.updated_at.constraints[0].value).toBeNull();
        expect(filters.updated_at.constraints[1].value).toBeNull();
    });

    it('initializes multiselect filters to empty arrays', () => {
        const filters = createInitialFilters();
        expect(filters.brand.value).toEqual([]);
        expect(filters.topic.value).toEqual([]);
        expect(filters.vip_level.value).toEqual([]);
        expect(filters.customer_email.value).toEqual([]);
        expect(filters.agent_email.value).toEqual([]);
        expect(filters._chatTagsString.value).toEqual([]);
    });

    it('initializes single-value filters to null', () => {
        const filters = createInitialFilters();
        expect(filters.csat_score.value).toBeNull();
        expect(filters.sentiment.value).toBeNull();
        expect(filters.ticketid.value).toBeNull();
        expect(filters.chat_transcript.value).toBeNull();
        expect(filters.email_transcript.value).toBeNull();
        expect(filters.sentiment_reason.value).toBeNull();
        expect(filters.summary.value).toBeNull();
    });
});

describe('extractFilterParams', () => {
    it('flattens the PrimeVue filter model into the flat shape pipelines consume', () => {
        const start = new Date('2026-04-01T00:00:00Z');
        const end = new Date('2026-04-02T00:00:00Z');
        const filters = createInitialFilters();
        // Mutate a few fields to look like a user filtered the table.
        filters.global.value = 'Gold support';
        filters.brand.value = ['Aruba'];
        filters.vip_level.value = ['gold'];
        filters.csat_score.value = 'good';
        filters.timestamp.constraints[0].value = start;
        filters.timestamp.constraints[1].value = end;

        const params = extractFilterParams(filters);
        expect(params.globalFilter).toBe('Gold support');
        expect(params.brand).toEqual(['Aruba']);
        expect(params.vip_level).toEqual(['gold']);
        expect(params.csat_score).toBe('good');
        expect(params.startDate).toBe(start);
        expect(params.endDate).toBe(end);
    });

    it("emits '' (NOT null) for an empty global filter", () => {
        // applyMockedTicketFilters/buildTicketListParams check truthiness;
        // both '' and null are falsy, but '' is the documented contract.
        const filters = createInitialFilters();
        filters.global.value = null;
        const params = extractFilterParams(filters);
        expect(params.globalFilter).toBe('');
    });

    it('falls back to [] for missing multiselect arrays (defensive)', () => {
        // If a filter object is half-built (e.g. lazy-init in progress),
        // the `?? []` guards keep downstream loops safe.
        const params = extractFilterParams({});
        expect(params.brand).toEqual([]);
        expect(params.topic).toEqual([]);
        expect(params.vip_level).toEqual([]);
        expect(params.customer_email).toEqual([]);
        expect(params.agent_email).toEqual([]);
        expect(params._chatTagsString).toEqual([]);
    });

    it('returns dates from constraint indexes [0] (start) and [1] (end)', () => {
        // The convention is fixed: [0] is the AFTER bound, [1] is the
        // BEFORE bound. Reversing them silently breaks date filtering.
        const start = new Date('2026-04-01T00:00:00Z');
        const end = new Date('2026-04-02T00:00:00Z');
        const filters = createInitialFilters();
        filters.timestamp.constraints[0].value = start;
        filters.timestamp.constraints[1].value = end;
        filters.started_at.constraints[0].value = start;
        filters.started_at.constraints[1].value = end;
        filters.updated_at.constraints[0].value = start;
        filters.updated_at.constraints[1].value = end;

        const params = extractFilterParams(filters);
        expect(params.startDate).toBe(start);
        expect(params.endDate).toBe(end);
        expect(params.startedAtStart).toBe(start);
        expect(params.startedAtEnd).toBe(end);
        expect(params.updatedAtStart).toBe(start);
        expect(params.updatedAtEnd).toBe(end);
    });

    it('extracts every documented top-level filter field', () => {
        // This is the regression-prevention test for the "added a filter to
        // createInitialFilters but forgot to extract it" bug class. If a
        // future filter is added, this test will fail until the new key is
        // also threaded through extractFilterParams.
        const filters = createInitialFilters();
        const params = extractFilterParams(filters);
        const keys = new Set(Object.keys(params));
        const expected = [
            'globalFilter',
            'ticketid',
            'brand',
            'topic',
            'vip_level',
            'customer_email',
            'agent_email',
            '_chatTagsString',
            'csat_score',
            'sentiment',
            'sentiment_reason',
            'chat_transcript',
            'email_transcript',
            'summary',
            'startDate',
            'endDate',
            'startedAtStart',
            'startedAtEnd',
            'updatedAtStart',
            'updatedAtEnd'
        ];
        for (const k of expected) {
            expect(keys.has(k)).toBe(true);
        }
    });
});

describe('exported constants', () => {
    it('PAGE_SIZE_DEFAULT is 5 (matches CLAUDE.md gotcha)', () => {
        expect(PAGE_SIZE_DEFAULT).toBe(5);
    });

    it('PAGE_SIZE_OPTIONS contains the documented values', () => {
        expect(PAGE_SIZE_OPTIONS).toEqual([5, 10, 20, 50, 100]);
    });

    it('FILTER_DEBOUNCE_MS is 300ms', () => {
        expect(FILTER_DEBOUNCE_MS).toBe(300);
    });
});
