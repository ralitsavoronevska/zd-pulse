<script setup>
import { useLayout } from '@/layout/composables/layout';
import { onMounted, ref, watch, computed } from 'vue';
import { useTopicCharts } from '@/composables/useChartAggregations';
import { useTableStore } from '@/stores/tableStore';
import { useLazyWidgetFetch } from '@/composables/useLazyWidgetFetch';

const { layoutConfig, isDarkTheme } = useLayout();
const { barDataTotalNegative, lineDataPercent, hasChartData } = useTopicCharts();

const tableStore = useTableStore();

// Fixed chart area height + space for 45° rotated x-axis labels
const CHART_HEIGHT = 500;
// Width grows with topic count so every bar is visible; minimum 1200px
const topicCount = computed(() => barDataTotalNegative.value?.labels?.length ?? 0);
const chartWidth = computed(() => Math.max(1400, topicCount.value * 90));

const barChartOptions = ref(null);
const lineChartOptions = ref(null);

// ── Lazy-loading scaffold ───────────────────────────────────────────────
// Topic-chart data was previously fetched at mount time by `useTicketTableData`
// alongside every other aggregation — 6 concurrent HTTP requests on cold load.
// This widget is always below the fold, so the fetch is now gated on scroll
// via a shared composable. See decision #13 in Key Architecture Decisions,
// CLAUDE.md.
const rootRef = ref(null);
useLazyWidgetFetch({ rootRef, fetch: tableStore.fetchTopicChart });

onMounted(() => setChartOptions());

watch([() => layoutConfig.primary, isDarkTheme], setChartOptions);

function setChartOptions() {
    const style = getComputedStyle(document.documentElement);
    const textColor = style.getPropertyValue('--text-color');
    const textSecondary = style.getPropertyValue('--text-color-secondary');
    const surfaceBorder = style.getPropertyValue('--surface-border');

    const xScale = {
        ticks: { color: textSecondary, maxRotation: 45, minRotation: 45, autoSkip: false },
        grid: { color: surfaceBorder }
    };

    barChartOptions.value = {
        responsive: false,
        indexAxis: 'x',
        plugins: {
            legend: {
                labels: {
                    color: textColor,
                    useBorderRadius: true,
                    borderRadius: 4,
                    boxWidth: 24,
                    boxHeight: 24,
                    font: { size: 20 },
                    generateLabels: (chart) =>
                        chart.data.datasets.map((ds, i) => {
                            const visible = chart.isDatasetVisible(i);
                            const color = ds.borderColor || ds.backgroundColor;
                            return {
                                text: (visible ? '☑ ' : '☐ ') + ds.label,
                                fillStyle: visible ? color : 'transparent',
                                strokeStyle: color,
                                lineWidth: 2,
                                hidden: !visible,
                                datasetIndex: i
                            };
                        })
                }
            }
        },
        datasets: {
            bar: { barThickness: 32, maxBarThickness: 40 }
        },
        scales: {
            x: xScale,
            y: {
                ticks: { color: textSecondary, precision: 0 },
                grid: { color: surfaceBorder },
                beginAtZero: true,
                suggestedMax: 1
            }
        }
    };

    lineChartOptions.value = {
        responsive: false,
        indexAxis: 'x',
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: (ctx) => `${ctx.dataset.label}: ${Number(ctx.parsed.y).toFixed(1)}%`
                }
            }
        },
        scales: {
            x: xScale,
            y: {
                ticks: { color: textSecondary, callback: (v) => `${v}%` },
                grid: { color: surfaceBorder },
                min: 0,
                max: 100
            }
        }
    };
}
</script>

<template>
    <!-- Always render the root so IntersectionObserver has an element to
         observe; the chart card only materializes once data arrives. -->
    <div ref="rootRef" class="chart-doc-root min-h-[1px]">
        <div class="card pt-2 my-8" v-if="hasChartData">
            <h2 class="font-semibold text-xl mb-6">Bar Chart – Topics Distribution</h2>

            <div v-if="barChartOptions" class="grid grid-cols-1 gap-8">
                <!-- Chart 1: Total + Negative Chats -->
                <div>
                    <h3 class="font-medium text-center mb-3">Number of Chats</h3>
                    <div class="w-full overflow-x-auto flex justify-center">
                        <Chart type="bar" :data="barDataTotalNegative" :options="barChartOptions" :width="chartWidth" :height="CHART_HEIGHT" />
                    </div>
                </div>

                <!-- Chart 2: % Negative Chats (line) -->
                <div>
                    <h3 class="font-medium text-center mb-3">% Negative Chats per Topic</h3>
                    <div class="w-full overflow-x-auto flex justify-center">
                        <Chart type="line" :data="lineDataPercent" :options="lineChartOptions" :width="chartWidth" :height="CHART_HEIGHT" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
