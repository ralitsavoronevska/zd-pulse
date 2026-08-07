import { nextTick, onUnmounted, watch } from 'vue';

/**
 * Injects a thin scroll-only `<div class="dt-top-scrollbar">` as a sibling
 * above PrimeVue's `.p-datatable-table-container` so the horizontal scrollbar
 * sits above the column header instead of at the bottom of the table.
 * Bidirectionally syncs `scrollLeft` between the two; tracks `scrollWidth`
 * via ResizeObserver and re-targets via MutationObserver when PrimeVue swaps
 * the inner `<table>` on data reload.
 *
 * Watches `dataTableRef` itself, so it works whether the DataTable is always
 * mounted (TableDoc) or rendered conditionally with `v-if` (VipTableDoc).
 *
 * Styling lives in `src/assets/layout/_utils.scss` (`.dt-top-scrollbar` +
 * the rule that hides the native bottom scrollbar on `.p-datatable-table-container`).
 *
 * @param {import('vue').Ref} dataTableRef — template ref for the DataTable
 */
export function useDataTableTopScrollbar(dataTableRef) {
    let topScrollerEl = null;
    let topScrollerInnerEl = null;
    let tableContainerEl = null;
    let resizeObserver = null;
    let mutationObserver = null;
    let observedTableEl = null;
    // `isSyncing` blocks scroll-event ping-pong: setting `el.scrollLeft` fires a
    // scroll event on the same element, which would feed back into the other.
    let isSyncing = false;

    function updateInnerWidth() {
        if (tableContainerEl && topScrollerInnerEl) {
            topScrollerInnerEl.style.width = `${tableContainerEl.scrollWidth}px`;
        }
    }

    function syncTopToTable() {
        if (isSyncing) return;
        isSyncing = true;
        tableContainerEl.scrollLeft = topScrollerEl.scrollLeft;
        requestAnimationFrame(() => {
            isSyncing = false;
        });
    }

    function syncTableToTop() {
        if (isSyncing) return;
        isSyncing = true;
        topScrollerEl.scrollLeft = tableContainerEl.scrollLeft;
        requestAnimationFrame(() => {
            isSyncing = false;
        });
    }

    function targetInnerTable() {
        const tableEl = tableContainerEl?.querySelector('table');
        if (tableEl === observedTableEl) return;
        if (observedTableEl && resizeObserver) resizeObserver.unobserve(observedTableEl);
        observedTableEl = tableEl;
        if (tableEl && resizeObserver) resizeObserver.observe(tableEl);
        updateInnerWidth();
    }

    async function setup() {
        // Two ticks: one for Vue, one for PrimeVue to render the scroll container.
        await nextTick();
        await nextTick();

        const dtRoot = dataTableRef.value?.$el;
        if (!dtRoot) return;

        tableContainerEl = dtRoot.querySelector('.p-datatable-table-container');
        if (!tableContainerEl) return;

        topScrollerEl = document.createElement('div');
        topScrollerEl.className = 'dt-top-scrollbar';
        topScrollerInnerEl = document.createElement('div');
        topScrollerEl.appendChild(topScrollerInnerEl);
        tableContainerEl.parentNode.insertBefore(topScrollerEl, tableContainerEl);

        topScrollerEl.addEventListener('scroll', syncTopToTable, { passive: true });
        tableContainerEl.addEventListener('scroll', syncTableToTop, { passive: true });

        resizeObserver = new ResizeObserver(updateInnerWidth);
        targetInnerTable();

        mutationObserver = new MutationObserver(targetInnerTable);
        mutationObserver.observe(tableContainerEl, { childList: true });
    }

    function teardown() {
        resizeObserver?.disconnect();
        resizeObserver = null;
        mutationObserver?.disconnect();
        mutationObserver = null;
        topScrollerEl?.removeEventListener('scroll', syncTopToTable);
        tableContainerEl?.removeEventListener('scroll', syncTableToTop);
        topScrollerEl?.remove();
        topScrollerEl = null;
        topScrollerInnerEl = null;
        tableContainerEl = null;
        observedTableEl = null;
    }

    // Watching the ref handles both lifecycle shapes uniformly:
    //   - Always-mounted tables: ref is set on mount, watcher fires once.
    //   - Conditionally-mounted tables (`v-if`): ref flips null↔component
    //     as the parent toggles the v-if; setup/teardown each transition.
    watch(
        dataTableRef,
        (now) => {
            if (now) setup();
            else teardown();
        },
        { immediate: true, flush: 'post' }
    );

    onUnmounted(teardown);
}
