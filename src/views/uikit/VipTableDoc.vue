<script setup>
import { computed, ref } from 'vue';
import { formatDate } from '@/utils/dateUtils';
import { useVipAggregation as useMockedVipAggregation } from '@/composables/useMockedVipAggregation';
import { useVipAggregation as useApiVipAggregation } from '@/composables/useApiVipAggregation';
import { useTableStore } from '@/stores/tableStore';
import { useLazyWidgetFetch } from '@/composables/useLazyWidgetFetch';
import { useDataTableTopScrollbar } from '@/composables/useDataTableTopScrollbar';

const USE_MOCKED = import.meta.env.VITE_USE_MOCKED_DATA === 'true';

const CSAT_HIGH_THRESHOLD = 80; // % — green
const CSAT_MID_THRESHOLD = 50; // % — yellow; below this is red

const { filteredCount, dateRange, dates, groupedData, hasVipData } = USE_MOCKED ? useMockedVipAggregation() : useApiVipAggregation();

const tableStore = useTableStore();

// API mode: ensure the `Visitor` row sits between `None` and `Normal`
// regardless of where the backend places it in `segments`. The backend now
// reliably returns visitor data, so we just splice it out of its natural
// position and re-insert at the canonical slot.
const tableData = computed(() => {
    const sourceRows = groupedData.value ?? [];
    if (USE_MOCKED || !sourceRows.length) return sourceRows;

    const rows = [...sourceRows];
    const visitorIdx = rows.findIndex((r) => r.segment === 'Visitor');
    if (visitorIdx < 0) return rows; // backend didn't include visitor — fall through

    const visitorRow = rows.splice(visitorIdx, 1)[0];
    // Slot Visitor before Normal (server always returns Normal as a baseline
    // segment, not a conditional VIP tier).
    const insertAt = rows.findIndex((r) => r.segment === 'Normal');
    return [...rows.slice(0, insertAt), visitorRow, ...rows.slice(insertAt)];
});

// ── Lazy-loading scaffold ───────────────────────────────────────────────
// See decision #13 in Key Architecture Decisions, CLAUDE.md.
const rootRef = ref(null);
useLazyWidgetFetch({ rootRef, fetch: tableStore.fetchVipCsat });

// ── Top horizontal scrollbar ──
// The DataTable mounts conditionally (`v-if="hasVipData"`); the composable
// watches the ref and sets up / tears down with each toggle.
const dataTable = ref(null);
useDataTableTopScrollbar(dataTable);

function getSegmentRowClass(segment) {
    const map = {
        None: 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-100',
        Normal: 'bg-green-100 text-green-900 dark:bg-green-900 dark:text-green-100',
        Visitor: 'bg-pink-100 text-pink-900 dark:bg-pink-900 dark:text-pink-100',
        Bronze: 'bg-orange-200 text-orange-900 dark:bg-orange-900 dark:text-orange-100',
        Silver: 'bg-slate-200 text-slate-800 dark:bg-slate-600 dark:text-slate-100',
        Gold: 'bg-yellow-200 text-yellow-900 dark:bg-yellow-900 dark:text-yellow-100',
        Platinum: 'bg-violet-100 text-violet-900 dark:bg-purple-900 dark:text-violet-100',
        Diamond: 'bg-cyan-100 text-cyan-900 dark:bg-cyan-900 dark:text-cyan-100',
        TOTAL: 'bg-slate-200 text-slate-800 dark:bg-slate-600 dark:text-slate-100'
    };
    return map[segment] || '';
}

function getCsatClass(csat) {
    if (!csat || csat === '—') return '';
    const val = parseFloat(csat);
    if (val >= CSAT_HIGH_THRESHOLD) return 'bg-green-100 text-green-800 font-semibold dark:bg-green-900 dark:text-green-300';
    if (val >= CSAT_MID_THRESHOLD) return 'bg-yellow-100 text-yellow-800 font-semibold dark:bg-yellow-900 dark:text-yellow-200';
    return 'bg-red-100 text-red-800 font-semibold dark:bg-red-900 dark:text-red-300';
}
</script>

<template>
    <!-- Always render the root so IntersectionObserver has something to observe;
         the VIP card only materializes once data arrives. -->
    <div ref="rootRef" class="vip-table-root min-h-[1px]">
        <div v-if="hasVipData" class="vip-table card mt-8">
            <!-- Info banner – matches TableDoc pattern -->
            <div class="dt-info-card card mb-8 p-4">
                <p v-if="filteredCount > 0" class="inline-block dt-info-p rounded-xl py-2 px-3">
                    Aggregated from <strong>{{ filteredCount }}</strong> filtered tickets (date range: {{ dateRange.start ? formatDate(dateRange.start) : '—' }} to {{ dateRange.end ? formatDate(dateRange.end) : '—' }})
                </p>
                <p v-else class="inline-block dt-info-p rounded-xl py-2 px-3">VIP CSAT data (date range: {{ dateRange.start ? formatDate(dateRange.start) : '—' }} to {{ dateRange.end ? formatDate(dateRange.end) : '—' }})</p>
            </div>

            <DataTable
                ref="dataTable"
                :value="tableData"
                rowGroupMode="rowspan"
                groupRowsBy="segment"
                sortMode="false"
                sortField="segment"
                :sortOrder="1"
                tableStyle="min-width: 50rem; text-align: center;"
                showGridlines
                responsiveLayout="scroll"
                :pt="{
                    table: { class: 'w-full text-sm text-gray-700 dark:text-gray-300' },
                    thead: { class: 'bg-gray-100 dark:bg-gray-700' },
                    tbody: { class: '' },
                    column: { root: { class: 'border-r last:border-r-0' } }
                }"
            >
                <Column header="Customer Segment" field="segment" :sortable="false" style="min-width: 180px; font-weight: bold; text-align: center; padding: 0">
                    <template #body="{ data }">
                        <div :class="getSegmentRowClass(data.segment)" class="p-8">{{ data.segment }}</div>
                    </template>
                </Column>

                <!-- Dynamic columns – one set per date -->
                <Column v-for="{ date, key } in dates" :key="key" :header="formatDate(date)" style="min-width: 140px; text-align: center; vertical-align: text-bottom; padding: 0">
                    <template #body="{ data }">
                        <div class="grid grid-cols-1 gap-0 text-sm p-0">
                            <div class="border-b border-solid border-(--p-datatable-body-cell-border-color)" :class="getCsatClass(data[`csat_${key}`])">CSAT: {{ data[`csat_${key}`] }}</div>
                            <div class="border-b border-solid border-(--p-datatable-body-cell-border-color)">✓ Good rates: {{ data[`good_${key}`] }}</div>
                            <div class="border-b border-solid border-(--p-datatable-body-cell-border-color)">✗ Bad rates: {{ data[`bad_${key}`] }}</div>
                            <div>Rated: {{ data[`rated_${key}`] }}</div>
                        </div>
                    </template>
                </Column>
            </DataTable>
        </div>
    </div>
</template>

<style lang="scss" scoped>
/* ── DataTable overrides (can't be done via Tailwind — need :deep for PrimeVue internals) ── */
.vip-table :deep(.p-datatable) {
    .p-datatable-thead > tr > th {
        background-color: var(--p-primary-50);
        color: var(--p-primary-800);
        font-weight: 600;
        padding: 12px !important;
        border-bottom-color: var(--text-color);
        .p-datatable-column-header-content {
            justify-content: center;
        }
    }

    .p-datatable-tbody > tr:last-child {
        font-weight: bold;
    }

    .p-datatable-tbody > tr > td {
        border-bottom-color: var(--text-color);
    }

    /* Pin the first column (Customer Segment) on horizontal scroll. PrimeVue's
       built-in `frozen` Column attribute only emits sticky CSS when the table
       is in `scrollable` mode — which we're not using because it changes the
       layout. The scroll context is `.p-datatable-table-container`'s
       `overflow-x: auto`, so plain `position: sticky` on the cells works.

       The body cell's coloured background is rendered by an inner div
       (`getSegmentRowClass`), so the `<td>` itself stays transparent. We
       give it `var(--surface-card)` as a fallback so columns scrolling
       behind don't bleed through any sub-pixel gap at the cell edges. */
    .p-datatable-thead > tr > th {
        &:first-child {
            position: sticky;
            left: 0;
            z-index: 2;
            border-right: 1px solid var(--p-datatable-header-cell-border-color);
        }
        &:nth-child(2) {
            border-width: 1px 0 1px 0 !important;
        }
    }

    .p-datatable-tbody > tr > td {
        &:first-child {
            position: sticky;
            left: 0;
            z-index: 1;
            background-color: var(--surface-card);
            border-right: 1px solid var(--p-datatable-body-cell-border-color) !important;
        }
        &:nth-child(2) {
            border-width: 1px 0 1px 0 !important;
        }
    }
}
</style>
