import { nextTick, onUnmounted, watch } from 'vue';

/**
 * Makes a PrimeVue DataTable's column-header `<thead>` behave as if it were
 * `position: sticky` to the page viewport.
 *
 * Why this exists: PrimeVue puts the table inside `.p-datatable-table-container`
 * with `overflow-x: auto`. Per CSS spec that makes the container a scroll
 * context on BOTH axes, which traps `position: sticky` for any descendant —
 * the thead can only stick within the container (which has no Y overflow),
 * not within the page viewport. The fix is to clone the thead OUTSIDE the
 * container, hide the original, and let the clone be sticky to the page.
 *
 * Click forwarding:
 *   - Sort clicks on the cloned thead → forwarded to the original `<th>`.
 *   - Filter button clicks → forwarded to the original button, BUT the
 *     resulting `.p-popover` is repositioned via a body-level MutationObserver
 *     because PrimeVue computes the popover's position from the trigger's
 *     `getBoundingClientRect()` — and the original is `display: none`, which
 *     means the popover would otherwise land at viewport (0,0). We capture
 *     the clone button's rect at click time and snap the popover to it the
 *     moment it appears in the DOM (before paint, so no flicker).
 *
 * Styling lives in TableDoc.vue's `<style>` block (`.dt-sticky-thead`).
 *
 * @param {import('vue').Ref} dataTableRef — template ref for the DataTable
 */
export function useDataTableStickyThead(dataTableRef) {
    let stickyWrapperEl = null;
    let cloneTableEl = null;
    let cloneTheadEl = null;
    let tableContainerEl = null;
    let originalTableEl = null;
    let originalTheadEl = null;
    let resizeObserver = null;
    let mutationObserver = null;
    let popoverObserver = null;
    let rebuildScheduled = false;
    // `isSyncing` blocks scroll-event ping-pong: setting `el.scrollLeft` fires
    // a scroll event on the same element, which would feed back into the other.
    let isSyncing = false;
    // The clone-button rect captured at the moment a filter click is forwarded
    // to the original. Read by the body-level MutationObserver and used to
    // reposition the resulting `.p-popover` so it appears under the clone's
    // button instead of the hidden original's (0,0) position.
    let pendingFilterAnchorRect = null;
    // Last vertical scroll position. Used by `closeOpenFilterPopoverOnScroll`
    // to ignore horizontal-only scrolling (e.g. inside the table container
    // itself, which scrolls horizontally and shouldn't dismiss filter UI).
    let lastScrollY = 0;

    function syncWidths() {
        if (!originalTableEl || !cloneTableEl || !cloneTheadEl) return;

        cloneTableEl.style.width = `${originalTableEl.scrollWidth}px`;

        // Read live column widths from the first body row's <td> cells. The
        // original <thead> is `display: none`, so its <th> rects are all zero
        // and would zero-out the clone if we used them. The body cells reflect
        // the actual rendered column widths (which include any content-driven
        // stretching past the column's min-width).
        const firstRow = originalTableEl.querySelector('tbody > tr');
        if (!firstRow) return; // empty table — clone keeps its cloned min-width styles
        const originalTds = firstRow.querySelectorAll(':scope > td');
        const cloneThs = cloneTheadEl.querySelectorAll(':scope > tr > th');
        originalTds.forEach((origTd, i) => {
            const cloneTh = cloneThs[i];
            if (!cloneTh) return;
            const w = origTd.getBoundingClientRect().width;
            if (w <= 0) return;
            cloneTh.style.width = `${w}px`;
            cloneTh.style.minWidth = `${w}px`;
            cloneTh.style.maxWidth = `${w}px`;
        });
    }

    function syncScroll() {
        if (isSyncing) return;
        isSyncing = true;
        if (stickyWrapperEl && tableContainerEl) {
            stickyWrapperEl.scrollLeft = tableContainerEl.scrollLeft;
        }
        requestAnimationFrame(() => {
            isSyncing = false;
        });
    }

    // Forward clicks from the cloned thead to the original. Filter-button
    // clicks need extra handling because the resulting popover is positioned
    // off-screen otherwise — we capture the clone button's rect and let the
    // body-level MutationObserver snap the popover into place.
    function handleCloneClick(e) {
        const cloneTh = e.target.closest('th');
        if (!cloneTh) return;

        const cloneThs = Array.from(cloneTheadEl.querySelectorAll(':scope > tr > th'));
        const idx = cloneThs.indexOf(cloneTh);
        const originalThs = originalTheadEl.querySelectorAll(':scope > tr > th');
        const targetTh = originalThs[idx];
        if (!targetTh) return;

        e.stopPropagation();
        e.preventDefault();

        // Filter button (funnel icon) — forward to original + reposition popover.
        const cloneFilterBtn = e.target.closest('.p-datatable-column-filter-button, .p-datatable-filter-icon, button.p-datatable-column-filter-menu-button');
        if (cloneFilterBtn) {
            const originalFilterBtn = targetTh.querySelector('.p-datatable-column-filter-button, .p-datatable-filter-icon, button.p-datatable-column-filter-menu-button');
            if (!originalFilterBtn) return;
            pendingFilterAnchorRect = cloneFilterBtn.getBoundingClientRect();
            originalFilterBtn.click();
            return;
        }

        // Otherwise — sort click on the th itself (only fires sort if the
        // column is `sortable`; PrimeVue ignores clicks on non-sortable th's).
        targetTh.click();
    }

    // PrimeVue's `absolutePosition(this.overlay, this.$refs.icon.$el)`
    // (ColumnFilter.vue:534) computes the popover's location from the
    // trigger's `getBoundingClientRect()`. The original button is `display:
    // none`, so its rect is all zeros and the popover lands at the top-left
    // of the document. This MutationObserver catches the popover the moment
    // it's appended to `<body>` (synchronous w.r.t. layout, before paint —
    // no flicker) and re-pins it under the clone button's rect with
    // `position: fixed` so page scroll doesn't drift it off.
    //
    // The actual popover class is `.p-datatable-filter-overlay` (verified in
    // `node_modules/primevue/datatable/style/index.mjs:66`). It's teleported
    // to `<body>` via PrimeVue's `<Portal>` component.
    const POPOVER_SELECTOR = '.p-datatable-filter-overlay';

    // Padding kept between the popover and the viewport edge when it has to be
    // nudged back on-screen.
    const POPOVER_VIEWPORT_PAD = 8;

    function applyPopoverReposition(popover) {
        if (!pendingFilterAnchorRect) return;
        const r = pendingFilterAnchorRect;
        popover.style.position = 'fixed';
        popover.style.top = `${r.bottom + 4}px`;
        popover.style.transform = 'none';
        popover.style.margin = '0';

        // Default: left-align the popover under the trigger button. For columns
        // near the right edge (e.g. Agent Email) that would overflow the
        // viewport, so flip to right-alignment — anchor the popover's RIGHT edge
        // to the button's right edge so it opens leftward and stays on screen.
        const popoverWidth = popover.offsetWidth;
        let left = r.left;
        if (left + popoverWidth > window.innerWidth - POPOVER_VIEWPORT_PAD) {
            left = r.right - popoverWidth;
        }
        // Final clamp so a popover wider than the trigger's offset can't tuck
        // under the left viewport edge either.
        if (left < POPOVER_VIEWPORT_PAD) left = POPOVER_VIEWPORT_PAD;
        popover.style.left = `${left}px`;

        pendingFilterAnchorRect = null;
    }

    // Auto-close any open filter popover when the user scrolls the page
    // vertically. The popover is `position: fixed` so it doesn't follow the
    // sticky thead — scrolling would otherwise leave it floating, detached
    // from its trigger. Closing it is cleaner than trying to keep them
    // synchronized.
    //
    // Implementation: dispatch a `click` on `<body>`. PrimeVue's ColumnFilter
    // binds its outside-click handler via
    //   `document.addEventListener('click', listener, true)`
    // (verified in primevue/datatable/ColumnFilter.vue:583). The `click` event
    // fires in capture phase on `document` BEFORE reaching the body target,
    // so the listener sees `target = body` (which is outside both the trigger
    // icon and the overlay) and toggles `overlayVisible = false`.
    //
    // Why not rely on PrimeVue's own scroll-close: it does exist
    // (ConnectedOverlayScrollHandler in `bindScrollListener`), but it walks
    // scrollable parents starting from `this.$refs.icon.$el` — which in our
    // sticky-thead setup is the ORIGINAL filter button inside a `display:
    // none` thead. The scrollable-parent traversal of a hidden element's
    // chain doesn't include the page-level scroll context, so PrimeVue's
    // native scroll-close never fires on real user scrolls. We compensate
    // here.
    //
    // Horizontal scroll inside `.p-datatable-table-container` fires window
    // scroll events on some browsers; the `lastScrollY` check filters those
    // out so the popover stays open while the user pans the table sideways.
    function closeOpenFilterPopoverOnScroll() {
        const y = window.scrollY;
        if (y === lastScrollY) return;
        lastScrollY = y;
        if (!document.querySelector(POPOVER_SELECTOR)) return;
        document.body.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
    }

    function handleBodyMutations(mutations) {
        if (!pendingFilterAnchorRect) return;
        for (const mutation of mutations) {
            for (const node of mutation.addedNodes) {
                if (node.nodeType !== 1) continue;
                const popover = node.matches?.(POPOVER_SELECTOR) ? node : node.querySelector?.(POPOVER_SELECTOR);
                if (popover) {
                    applyPopoverReposition(popover);
                    return;
                }
            }
        }
    }

    // Replace the clone's thead with a fresh copy of the original. Called when
    // the original mutates (sort indicator changes, filter active state, etc.)
    // so the sticky clone visually reflects the live state.
    function rebuildCloneThead() {
        if (!originalTheadEl || !cloneTableEl) return;
        if (cloneTheadEl) {
            cloneTheadEl.removeEventListener('click', handleCloneClick, true);
            cloneTheadEl.remove();
        }
        cloneTheadEl = originalTheadEl.cloneNode(true);
        // Original is `display: none`; the clone inherits that — strip it so
        // the clone actually renders.
        cloneTheadEl.style.display = '';
        cloneTheadEl.style.visibility = '';
        cloneTableEl.appendChild(cloneTheadEl);
        cloneTheadEl.addEventListener('click', handleCloneClick, true);
        syncWidths();
    }

    function scheduleRebuild() {
        if (rebuildScheduled) return;
        rebuildScheduled = true;
        requestAnimationFrame(() => {
            rebuildScheduled = false;
            rebuildCloneThead();
        });
    }

    async function setup() {
        // Two ticks: one for Vue, one for PrimeVue to render the table.
        await nextTick();
        await nextTick();

        const dtRoot = dataTableRef.value?.$el;
        if (!dtRoot) return;

        tableContainerEl = dtRoot.querySelector('.p-datatable-table-container');
        if (!tableContainerEl) return;

        originalTableEl = tableContainerEl.querySelector('table');
        originalTheadEl = originalTableEl?.querySelector('thead');
        if (!originalTableEl || !originalTheadEl) return;

        // Remove the original from the visual flow entirely. Column widths are
        // preserved because PrimeVue applies the Column's `style` (e.g.
        // `min-width: 10rem`) to BOTH the `<th>` and the matching `<td>` cells
        // (verified in `node_modules/primevue/datatable/HeaderCell.vue:323` and
        // `BodyCell.vue:544`), so the body cells alone are enough to keep
        // columns sized correctly.
        originalTheadEl.style.display = 'none';

        // Build the sticky wrapper containing a cloned table with only the thead.
        stickyWrapperEl = document.createElement('div');
        stickyWrapperEl.className = 'dt-sticky-thead';

        cloneTableEl = document.createElement('table');
        cloneTableEl.className = originalTableEl.className;

        const originalColgroup = originalTableEl.querySelector('colgroup');
        if (originalColgroup) {
            cloneTableEl.appendChild(originalColgroup.cloneNode(true));
        }

        stickyWrapperEl.appendChild(cloneTableEl);

        // Insert before the table-container — so the sticky element appears
        // visually right above the table body. NOTE: `useDataTableTopScrollbar`
        // also inserts before the table-container; whichever runs LAST sits
        // closest to the table. By calling `useDataTableStickyThead` AFTER
        // `useDataTableTopScrollbar` in the parent component, the order
        // becomes: scrollbar → sticky-thead → table-container.
        tableContainerEl.parentNode.insertBefore(stickyWrapperEl, tableContainerEl);

        // Build the clone thead and attach the click forwarder.
        rebuildCloneThead();

        tableContainerEl.addEventListener('scroll', syncScroll, { passive: true });

        resizeObserver = new ResizeObserver(syncWidths);
        resizeObserver.observe(originalTableEl);
        resizeObserver.observe(originalTheadEl);

        // Keep the clone reflecting the original's live state — sort
        // indicators flip, filter-active classes toggle, etc. `attributes:
        // true` catches class changes (the most common signal); `childList +
        // subtree` catches structural changes (icon spans appearing).
        // `scheduleRebuild` debounces multiple mutations into one rebuild
        // per frame.
        mutationObserver = new MutationObserver(scheduleRebuild);
        mutationObserver.observe(originalTheadEl, { childList: true, subtree: true, attributes: true });

        // Body-level observer: catches PrimeVue's filter `.p-popover` the
        // moment it's appended (before paint) and snaps it to the clone's
        // button rect. Stays armed for the component's lifetime.
        popoverObserver = new MutationObserver(handleBodyMutations);
        popoverObserver.observe(document.body, { childList: true });

        // Window scroll → close any open filter popover (vertical scrolls only).
        lastScrollY = window.scrollY;
        window.addEventListener('scroll', closeOpenFilterPopoverOnScroll, { passive: true });
    }

    function teardown() {
        resizeObserver?.disconnect();
        resizeObserver = null;
        mutationObserver?.disconnect();
        mutationObserver = null;
        popoverObserver?.disconnect();
        popoverObserver = null;
        cloneTheadEl?.removeEventListener('click', handleCloneClick, true);
        tableContainerEl?.removeEventListener('scroll', syncScroll);
        window.removeEventListener('scroll', closeOpenFilterPopoverOnScroll);
        stickyWrapperEl?.remove();
        stickyWrapperEl = null;
        cloneTableEl = null;
        cloneTheadEl = null;
        if (originalTheadEl) originalTheadEl.style.display = '';
        originalTheadEl = null;
        originalTableEl = null;
        tableContainerEl = null;
        pendingFilterAnchorRect = null;
    }

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
