import { computed } from 'vue';
import { useTableStore } from '@/stores/tableStore';
import { useTicketDataStore } from '@/stores/ticketData';

/**
 * API-mode VIP aggregation — transforms server response from /api/vip-csat-data/
 * into DataTable rows. Same return interface as useMockedVipAggregation.
 *
 * Server returns:
 * { segments: [...], dates: ["2026-03-29", ...], data: { gold: { "2026-03-31": { good, bad, rated } } }, totals: { ... } }
 */
export function useVipAggregation() {
    const tableStore = useTableStore();
    const ticketDataStore = useTicketDataStore();

    const dates = computed(() => {
        const serverDates = tableStore.vipCsatData?.dates ?? [];
        return serverDates.map((d) => ({ date: new Date(d), key: d }));
    });

    const dateRange = computed(() => {
        const d = dates.value;
        if (!d.length) return { start: null, end: null };
        return { start: d[0].date, end: d[d.length - 1].date };
    });

    const groupedData = computed(() => {
        const vipData = tableStore.vipCsatData;
        if (!vipData?.segments?.length || !dates.value.length) return [];

        const rows = vipData.segments.map((segment) => {
            const row = { segment: segment.charAt(0).toUpperCase() + segment.slice(1) };
            const segmentData = vipData.data?.[segment] ?? {};

            dates.value.forEach(({ key }) => {
                const s = segmentData[key] ?? { good: 0, bad: 0, rated: 0 };
                row[`good_${key}`] = s.good;
                row[`bad_${key}`] = s.bad;
                row[`rated_${key}`] = s.rated;
                row[`csat_${key}`] = s.rated > 0 ? ((s.good / s.rated) * 100).toFixed(2) + '%' : '—';
            });

            return row;
        });

        // Totals row from server
        const totals = vipData.totals ?? {};
        const totalRow = { segment: 'TOTAL' };
        dates.value.forEach(({ key }) => {
            const t = totals[key] ?? { good: 0, bad: 0, rated: 0 };
            totalRow[`good_${key}`] = t.good;
            totalRow[`bad_${key}`] = t.bad;
            totalRow[`rated_${key}`] = t.rated;
            totalRow[`csat_${key}`] = t.rated > 0 ? ((t.good / t.rated) * 100).toFixed(2) + '%' : '—';
        });
        rows.push(totalRow);

        return rows;
    });

    const hasVipData = computed(() => {
        const vipData = tableStore.vipCsatData;
        if (!vipData?.segments?.length || !vipData?.dates?.length) return false;
        return true;
    });

    // The actual filtered ticket list isn't materialized in API mode (server
    // paginates), but the banner just needs the count. Mirror that count from
    // the ticket store so VipTableDoc can render "Aggregated from N filtered
    // tickets" identically to mock mode.
    const filteredCount = computed(() => ticketDataStore.totalCount ?? 0);

    return { dateRange, dates, groupedData, hasVipData, filteredCount };
}
