// Tests for `setSingleTicketAggregations` — the action that keeps StatsWidget,
// ChartDoc, and VipTableDoc consistent with the table when the user filters
// down to a single ticket. The aggregation endpoints don't honor `ticketid`
// (and don't honor `customer_email`/`chat_tags` on `/api/vip-csat-data/`),
// so we synthesize the aggregation shapes client-side from the one ticket.
//
// The function is pure transform on top of three ref writes — input ticket
// produces a deterministic shape across `stats`, `topicChartData`, and
// `vipCsatData`. These tests pin that shape against accidental drift.
//
// Pinia is set up fresh per test (`setActivePinia(createPinia())`) so store
// state never leaks between cases. We don't mock `@pinia/testing` — the real
// store is light enough to instantiate directly.

import { describe, it, expect, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useTableStore } from './tableStore';

// Minimal ticket that exercises every field the function reads. Tests that
// care about a specific field override only that one — keeps each test's
// intent obvious.
const baseTicket = () => ({
    csat_score: 'good',
    sentiment: 'positive',
    vip_level: 'gold',
    summary: 'compliance: ok — fast handling',
    topic: 'Game Issue',
    brand: 'Aruba Bet',
    timestamp: new Date('2026-04-01T12:00:00Z')
});

beforeEach(() => {
    setActivePinia(createPinia());
});

// ════════════════════════════════════════════════════════════════════════
//  Null short-circuit — clears all three refs
// ════════════════════════════════════════════════════════════════════════
describe('setSingleTicketAggregations — null ticket', () => {
    it('clears stats / topicChartData / vipCsatData to null', () => {
        const store = useTableStore();
        // Seed non-null state so we can prove the call clears it.
        store.setSingleTicketAggregations(baseTicket());
        expect(store.stats).not.toBeNull();
        expect(store.topicChartData).not.toBeNull();
        expect(store.vipCsatData).not.toBeNull();

        store.setSingleTicketAggregations(null);
        expect(store.stats).toBeNull();
        expect(store.topicChartData).toBeNull();
        expect(store.vipCsatData).toBeNull();
    });
});

// ════════════════════════════════════════════════════════════════════════
//  stats shape — must match `/api/ticket-stats/` output
// ════════════════════════════════════════════════════════════════════════
describe('setSingleTicketAggregations — stats shape', () => {
    it('reports total_tickets = 1', () => {
        const store = useTableStore();
        store.setSingleTicketAggregations(baseTicket());
        expect(store.stats.total_tickets).toBe(1);
    });

    it('counts CSAT in the matching bucket only (good)', () => {
        const store = useTableStore();
        store.setSingleTicketAggregations({ ...baseTicket(), csat_score: 'good' });
        expect(store.stats.csat).toEqual({ good: 1, bad: 0, unoffered: 0 });
        expect(store.stats.unrated_tickets).toBe(0);
    });

    it('counts CSAT in the matching bucket only (bad)', () => {
        const store = useTableStore();
        store.setSingleTicketAggregations({ ...baseTicket(), csat_score: 'bad' });
        expect(store.stats.csat).toEqual({ good: 0, bad: 1, unoffered: 0 });
        expect(store.stats.unrated_tickets).toBe(0);
    });

    it('treats unoffered as unrated (unrated_tickets = 1)', () => {
        // unrated_tickets feeds the dashboard's "X tickets weren't surveyed"
        // metric. An 'unoffered' ticket is in CSAT.unoffered AND counted in
        // unrated_tickets.
        const store = useTableStore();
        store.setSingleTicketAggregations({ ...baseTicket(), csat_score: 'unoffered' });
        expect(store.stats.csat.unoffered).toBe(1);
        expect(store.stats.unrated_tickets).toBe(1);
    });

    it('lower-cases sentiment before bucketing (handles mixed-case input)', () => {
        const store = useTableStore();
        store.setSingleTicketAggregations({ ...baseTicket(), sentiment: 'Very Negative' });
        expect(store.stats.sentiment.very_negative).toBe(1);
        expect(store.stats.sentiment.positive).toBe(0);
    });

    it('counts brand only when present and not the placeholder "none"', () => {
        const store = useTableStore();
        store.setSingleTicketAggregations({ ...baseTicket(), brand: 'none' });
        expect(store.stats.brands_count).toBe(0);
        store.setSingleTicketAggregations({ ...baseTicket(), brand: 'Aruba Bet' });
        expect(store.stats.brands_count).toBe(1);
    });

    it('lower-cases vip_level before mapping into the tier object', () => {
        const store = useTableStore();
        store.setSingleTicketAggregations({ ...baseTicket(), vip_level: 'PLATINUM' });
        expect(store.stats.vip).toEqual({ platinum: 1, diamond: 0, gold: 0, silver: 0, bronze: 0 });
    });

    it('detects compliance:ok in summary regardless of spacing/case', () => {
        const store = useTableStore();
        store.setSingleTicketAggregations({ ...baseTicket(), summary: 'COMPLIANCE OK — clean handling' });
        expect(store.stats.compliance).toEqual({ ok: 1, issue: 0, missing: 0 });
    });

    it('detects compliance:issue in summary', () => {
        const store = useTableStore();
        store.setSingleTicketAggregations({ ...baseTicket(), summary: 'compliance: issue — escalated' });
        expect(store.stats.compliance).toEqual({ ok: 0, issue: 1, missing: 0 });
    });

    it('flags compliance.missing when the word "compliance" is absent', () => {
        // The `missing` flag is the inverse of "the word compliance appears
        // anywhere in the summary" — used by the dashboard to surface tickets
        // the analyst hasn't tagged with a compliance verdict.
        const store = useTableStore();
        store.setSingleTicketAggregations({ ...baseTicket(), summary: 'no compliance word' });
        // 'compliance' word IS present → missing should be 0.
        expect(store.stats.compliance.missing).toBe(0);
        store.setSingleTicketAggregations({ ...baseTicket(), summary: 'fast handling, customer happy' });
        // No 'compliance' word → missing should be 1.
        expect(store.stats.compliance.missing).toBe(1);
    });
});

// ════════════════════════════════════════════════════════════════════════
//  topicChartData shape — must match `/api/topic-chart-data/` output
// ════════════════════════════════════════════════════════════════════════
describe('setSingleTicketAggregations — topic chart shape', () => {
    it('emits one topic with total = 1', () => {
        const store = useTableStore();
        store.setSingleTicketAggregations(baseTicket());
        expect(store.topicChartData.topics.length).toBe(1);
        expect(store.topicChartData.topics[0]).toMatchObject({
            topic: 'Game Issue',
            total: 1
        });
    });

    it('falls back to "Unknown" when topic is missing', () => {
        const store = useTableStore();
        store.setSingleTicketAggregations({ ...baseTicket(), topic: undefined });
        expect(store.topicChartData.topics[0].topic).toBe('Unknown');
    });

    it('reports percent_negative = 100 for a negative sentiment', () => {
        const store = useTableStore();
        store.setSingleTicketAggregations({ ...baseTicket(), sentiment: 'very negative' });
        expect(store.topicChartData.topics[0].negative).toBe(1);
        expect(store.topicChartData.topics[0].percent_negative).toBe(100);
    });

    it('reports percent_negative = 0 for a non-negative sentiment', () => {
        const store = useTableStore();
        store.setSingleTicketAggregations({ ...baseTicket(), sentiment: 'positive' });
        expect(store.topicChartData.topics[0].negative).toBe(0);
        expect(store.topicChartData.topics[0].percent_negative).toBe(0);
    });
});

// ════════════════════════════════════════════════════════════════════════
//  vipCsatData shape — must match `/api/vip-csat-data/` output
// ════════════════════════════════════════════════════════════════════════
describe('setSingleTicketAggregations — VIP CSAT shape', () => {
    it("renders only the ticket's segment row (not all 7 tiers)", () => {
        // If we rendered every segment row with 0/0/0 cells, the user
        // couldn't tell which tier the visible ticket belongs to.
        const store = useTableStore();
        store.setSingleTicketAggregations({ ...baseTicket(), vip_level: 'gold' });
        expect(store.vipCsatData.segments).toEqual(['gold']);
    });

    it('lower-cases the segment so it matches what useApiVipAggregation expects', () => {
        const store = useTableStore();
        store.setSingleTicketAggregations({ ...baseTicket(), vip_level: 'Gold' });
        expect(store.vipCsatData.segments).toEqual(['gold']);
    });

    it('falls back to "none" when vip_level is missing', () => {
        const store = useTableStore();
        store.setSingleTicketAggregations({ ...baseTicket(), vip_level: undefined });
        expect(store.vipCsatData.segments).toEqual(['none']);
    });

    it('emits a single date key in YYYY-MM-DD shape', () => {
        // The exact date depends on the runner's local TZ (the function uses
        // local-midnight then ISO). Assert the shape, not the value.
        const store = useTableStore();
        store.setSingleTicketAggregations(baseTicket());
        expect(store.vipCsatData.dates.length).toBe(1);
        expect(store.vipCsatData.dates[0]).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    });

    it('writes a CSAT cell under data[segment][dateKey]', () => {
        const store = useTableStore();
        store.setSingleTicketAggregations({ ...baseTicket(), vip_level: 'gold', csat_score: 'good' });
        const segment = store.vipCsatData.segments[0];
        const dateKey = store.vipCsatData.dates[0];
        expect(store.vipCsatData.data[segment][dateKey]).toEqual({ good: 1, bad: 0, rated: 1 });
    });

    it('counts unoffered CSAT as rated = 0 (mirrors the API contract)', () => {
        // /api/vip-csat-data/ excludes 'unoffered' from the rated denominator
        // because CSAT % is over rated tickets only.
        const store = useTableStore();
        store.setSingleTicketAggregations({ ...baseTicket(), csat_score: 'unoffered' });
        const segment = store.vipCsatData.segments[0];
        const dateKey = store.vipCsatData.dates[0];
        expect(store.vipCsatData.data[segment][dateKey]).toEqual({ good: 0, bad: 0, rated: 0 });
    });

    it("mirrors the cell into totals so VipTableDoc's TOTAL row renders", () => {
        const store = useTableStore();
        store.setSingleTicketAggregations({ ...baseTicket(), csat_score: 'bad' });
        const dateKey = store.vipCsatData.dates[0];
        expect(store.vipCsatData.totals[dateKey]).toEqual({ good: 0, bad: 1, rated: 1 });
    });

    it('parses string timestamps as well as Date objects', () => {
        // API responses arrive with string timestamps; mock-mode arrives with
        // Date instances after normalization. Both must yield a valid dateKey.
        const store = useTableStore();
        store.setSingleTicketAggregations({ ...baseTicket(), timestamp: '2026-04-01T12:00:00Z' });
        expect(store.vipCsatData.dates[0]).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    });
});
