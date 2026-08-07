import { onMounted, onUnmounted, ref, watch } from 'vue';
import { useTableStore } from '@/stores/tableStore';

const USE_MOCKED = import.meta.env.VITE_USE_MOCKED_DATA === 'true';

/**
 * Shared scaffold for below-the-fold widgets (ChartDoc, VipTableDoc) that
 * fetch their own aggregation data instead of piggy-backing on the initial
 * on-mount burst in `useTicketTableData`. See decision #13 in Key
 * Architecture Decisions, CLAUDE.md.
 *
 * Behavior:
 *   - `IntersectionObserver` (`rootMargin: '200px'`) gates the FIRST fetch.
 *   - Once triggered, subsequent `tableStore.currentFilterParams` changes
 *     re-fetch automatically — but only for triggered widgets (an unscrolled
 *     widget shouldn't race every filter change).
 *   - Mock mode and `ticketid` filters are no-ops — aggregation data is
 *     populated client-side by `setSingleTicketAggregations` or by client-side
 *     mock aggregators.
 *   - Errors are handled and logged inside the store-level fetch action;
 *     this composable just awaits.
 *
 * @param {Object} opts
 * @param {import('vue').Ref}                 opts.rootRef  - Template ref on the widget's root element.
 * @param {(filters: Object) => Promise<void>} opts.fetch   - Store action that actually performs the HTTP fetch
 *                                                           (e.g. `tableStore.fetchTopicChart`). Expected to
 *                                                           handle its own errors; swallow or rethrow as needed.
 * @param {string}  [opts.rootMargin='200px']                - IntersectionObserver root margin.
 * @returns {{ hasTriggered: import('vue').Ref<boolean> }}
 */
export function useLazyWidgetFetch({ rootRef, fetch, rootMargin = '200px' }) {
    const tableStore = useTableStore();
    const hasTriggered = ref(false);
    let observer = null;

    async function fetchIfNeeded() {
        // Mock mode: aggregations come from client-side computation; no HTTP.
        if (USE_MOCKED) return;
        const params = tableStore.currentFilterParams;
        if (!params) return; // filter params haven't been primed by useTicketTableData yet
        // `ticketid` lookups populate aggregations client-side via
        // `setSingleTicketAggregations` — don't race an HTTP fetch that would
        // return broader data and overwrite it.
        if (params.ticketid) return;
        await fetch(params);
    }

    function triggerFirstFetch() {
        if (hasTriggered.value) return;
        hasTriggered.value = true;
        fetchIfNeeded();
    }

    // Re-fetch on filter changes — but only once the widget has been seen.
    // `setCurrentFilterParams` always assigns a fresh object, so a shallow
    // identity check is enough; no `deep: true` needed.
    watch(
        () => tableStore.currentFilterParams,
        () => {
            if (!hasTriggered.value) return;
            fetchIfNeeded();
        }
    );

    onMounted(() => {
        // Mock mode skips both the observer and the HTTP fetch. Still flip
        // `hasTriggered` so the filter-change watcher above is a no-op (it
        // would be anyway — `fetchIfNeeded` returns early — but flipping
        // keeps state consistent if callers inspect it).
        if (USE_MOCKED) {
            hasTriggered.value = true;
            return;
        }

        // Fallback for environments without IntersectionObserver (older
        // browsers, some SSR shells) — fetch immediately on mount.
        if (!rootRef.value || typeof IntersectionObserver === 'undefined') {
            triggerFirstFetch();
            return;
        }

        observer = new IntersectionObserver(
            (entries) => {
                if (entries.some((e) => e.isIntersecting)) {
                    triggerFirstFetch();
                    observer?.disconnect();
                    observer = null;
                }
            },
            { rootMargin }
        );
        observer.observe(rootRef.value);
    });

    onUnmounted(() => {
        observer?.disconnect();
        observer = null;
    });

    return { hasTriggered };
}
