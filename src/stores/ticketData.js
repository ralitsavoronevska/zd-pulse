import { acceptHMRUpdate, defineStore } from 'pinia';
import { ref, shallowRef } from 'vue';
import { emptyToNone, LOWERCASE_FIELDS } from '@/utils/normalization';
import { logger } from '@/utils/logger';
import { PAGE_SIZE_DEFAULT, createInitialFilters, extractFilterParams } from '@/composables/useTicketFilters';
import api from '@/services/authApi';
import { buildTicketListParams, fetchTicketDetail, fetchTicketList } from '@/services/ticketApi';

const USE_MOCKED = import.meta.env.VITE_USE_MOCKED_DATA === 'true';

// ── Fields that get emptyToNone normalization (short categorical fields) ──
const NORMALIZE_FIELDS = ['topic', 'brand', 'vip_level', 'customer_email', 'agent_email', 'csat_score', 'sentiment'];

// ── Helpers ──
const toArray = (value) => {
    if (Array.isArray(value)) return value;
    if (value == null) return [];
    if (typeof value === 'string') return value.trim() ? [value.trim()] : [];
    if (typeof value === 'number') return [String(value)];
    return [];
};

// ── Build _chatTagsString from chat_tags[] (shared by mock + API normalization) ──
function buildChatTagsString(tags) {
    return toArray(tags)
        .filter((t) => typeof t === 'string' && t.trim())
        .map((t) => t.trim().toLowerCase())
        .sort()
        .join(', ');
}

// ── emptyToNone + lowercase pass shared by both mock and API normalizers ──
// Mock mode gets the lowercase pass too so its filter dropdowns don't pick
// up "Gold" vs "gold" duplicates from mixed-case fixture data (same concern
// as `normalizeFilterOptions` applies on the API side).
function normalizeCategoricalFields(ticket) {
    const normalized = Object.fromEntries(NORMALIZE_FIELDS.map((field) => [field, emptyToNone(ticket[field])]));
    for (const field of LOWERCASE_FIELDS) {
        if (typeof normalized[field] === 'string' && normalized[field] !== 'none') {
            normalized[field] = normalized[field].toLowerCase();
        }
    }
    return normalized;
}

// ── Process a single raw ticket into the shape the table expects (mock mode) ──
function mockedProcessTicket(ticket) {
    return {
        ...ticket,
        ...normalizeCategoricalFields(ticket),
        timestamp: new Date(ticket.timestamp),
        started_at: ticket.started_at ? new Date(ticket.started_at) : null,
        updated_at: ticket.updated_at ? new Date(ticket.updated_at) : null,
        _chatTagsString: buildChatTagsString(ticket.chat_tags)
    };
}

/**
 * Normalize an API response record:
 * - emptyToNone on categorical fields
 * - lowercase vip_level, sentiment, csat_score (API returns Title Case, frontend expects lowercase)
 * - convert date strings to Date objects
 * - stringify ticketid (API returns integer, frontend uses string)
 * - build _chatTagsString from chat_tags[] for filter compatibility
 */
function normalizeApiRecord(ticket) {
    return {
        ...ticket,
        ...normalizeCategoricalFields(ticket),
        ticketid: String(ticket.ticketid),
        timestamp: ticket.timestamp ? new Date(ticket.timestamp) : null,
        started_at: ticket.started_at ? new Date(ticket.started_at) : null,
        updated_at: ticket.updated_at ? new Date(ticket.updated_at) : null,
        has_chat_transcript: ticket.has_chat_transcript === true,
        has_email_transcript: ticket.has_email_transcript === true,
        _chatTagsString: buildChatTagsString(ticket.chat_tags)
    };
}

// ── Yield to the browser event loop between processing batches ──
function yieldToMain() {
    if (typeof scheduler !== 'undefined' && typeof scheduler.yield === 'function') {
        return scheduler.yield();
    }
    return new Promise((resolve) => setTimeout(resolve, 0));
}

const PROCESS_BATCH_SIZE = 150;

export const useTicketDataStore = defineStore('ticketData', () => {
    // ── Shared state ──
    const isLoading = ref(false);
    const fetchError = ref(null);

    // ── Mock-mode state ──
    const mockedFullProcessedTickets = shallowRef([]);

    // ── API-mode state ──
    const tickets = shallowRef([]);
    const totalCount = ref(0);

    // Non-reactive init tracking
    let isInitialized = false;
    let initPromise = null;

    // Generation counter — matches tableStore's pattern. Guards against stale
    // `fetchTickets` responses overwriting fresh data when the user pages/filters
    // faster than the server responds.
    let fetchGeneration = 0;

    // ════════════════════════════════════════════════════════════════════
    //  MOCK MODE — existing client-side logic (loads all data, IDB cache)
    // ════════════════════════════════════════════════════════════════════

    async function mockedProcessRecords(rawData) {
        const result = new Array(rawData.length);
        for (let i = 0; i < rawData.length; i += PROCESS_BATCH_SIZE) {
            const end = Math.min(i + PROCESS_BATCH_SIZE, rawData.length);
            for (let j = i; j < end; j++) {
                result[j] = mockedProcessTicket(rawData[j]);
            }
            if (end < rawData.length) {
                await yieldToMain();
            }
        }
        mockedFullProcessedTickets.value = result;
    }

    /** Strip transient per-row fields (`_mockedSearchIndex`) before persisting
     *  to IDB. The index is lazily rebuilt on demand and can balloon the
     *  cache into several MB of unused strings. */
    function stripTransientFields(tickets) {
        return tickets.map(({ _mockedSearchIndex, ...rest }) => rest);
    }

    async function mockedFetchAndCache() {
        const response = await api.get('/api/ticket-conversation-summaries/');
        const raw = Array.isArray(response.data) ? response.data : (response.data.results ?? []);
        await mockedProcessRecords(raw);
        const { setCachedTickets } = await import('@/services/mockedTicketCache');
        setCachedTickets(stripTransientFields(mockedFullProcessedTickets.value)).catch((err) => logger.warn('IDB write failed:', err));
    }

    async function mockedRefreshInBackground() {
        try {
            await mockedFetchAndCache();
        } catch (err) {
            logger.warn('Background refresh failed (non-fatal):', err);
        }
    }

    async function mockedLazyInit() {
        isLoading.value = true;
        fetchError.value = null;
        try {
            const { default: mockData } = await import('@/services/mocked-ticket-summaries.json');
            await mockedProcessRecords(mockData);
            isInitialized = true;
            return;
        } catch (err) {
            // If mock data not available, try IDB + API fallback
            try {
                const { getCachedTickets, isCacheStale } = await import('@/services/mockedTicketCache');
                const cached = await getCachedTickets().catch(() => null);

                if (cached?.data?.length) {
                    for (let i = 0; i < cached.data.length; i++) {
                        const t = cached.data[i];
                        if (t.timestamp && !(t.timestamp instanceof Date)) t.timestamp = new Date(t.timestamp);
                        if (t.started_at && !(t.started_at instanceof Date)) t.started_at = new Date(t.started_at);
                        if (t.updated_at && !(t.updated_at instanceof Date)) t.updated_at = new Date(t.updated_at);
                    }
                    mockedFullProcessedTickets.value = cached.data;
                    isLoading.value = false;
                    isInitialized = true;

                    if (isCacheStale(cached)) {
                        mockedRefreshInBackground().catch((e) => logger.warn('Background refresh failed:', e));
                    }
                    return;
                }

                await mockedFetchAndCache();
                isInitialized = true;
            } catch (innerErr) {
                fetchError.value = innerErr;
                isInitialized = false;
                logger.error('useTicketDataStore: failed to load tickets (mock mode)', innerErr);
            }
        } finally {
            isLoading.value = false;
        }
    }

    // ════════════════════════════════════════════════════════════════════
    //  API MODE — server-side pagination, per-request data fetching
    // ════════════════════════════════════════════════════════════════════

    /**
     * Fetches a page of tickets matching `params` and returns a snapshot
     * `{ tickets, totalCount }` for the caller to operate on directly —
     * critical for downstream code that derives state from this exact
     * response (e.g. single-result aggregation overrides). Reading
     * `ticketDataStore.tickets` after the await is unsafe because a later
     * fetch with a fresher generation may have overwritten it.
     *
     * Returns `null` when the response was discarded as stale (a newer
     * fetchGeneration superseded it) or when the underlying request errored
     * — in both cases the caller should NOT proceed with side effects.
     */
    async function fetchTickets(params) {
        const generation = ++fetchGeneration;
        isLoading.value = true;
        fetchError.value = null;
        try {
            // The list endpoint ignores the `ticketid` query param — route through the
            // detail endpoint (/api/ticket-summaries/{id}/) for exact-match lookup,
            // then wrap the single result in the paginated list shape the DataTable expects.
            if (params.ticketid) {
                try {
                    const data = await fetchTicketDetail(params.ticketid);
                    if (generation !== fetchGeneration) return null; // stale — a newer request is in flight
                    const normalized = normalizeApiRecord(data);
                    // Detail endpoint returns the actual transcript texts (not the has_* booleans);
                    // derive the booleans from content presence so the "View" buttons render correctly.
                    normalized.has_chat_transcript = !!normalized.chat_transcript;
                    normalized.has_email_transcript = !!normalized.email_transcript;
                    tickets.value = [normalized];
                    totalCount.value = 1;
                    return { tickets: [normalized], totalCount: 1 };
                } catch (err) {
                    if (err?.response?.status === 404) {
                        if (generation !== fetchGeneration) return null;
                        tickets.value = [];
                        totalCount.value = 0;
                        return { tickets: [], totalCount: 0 };
                    }
                    throw err;
                }
            }

            const data = (await fetchTicketList(params)) ?? {};
            if (generation !== fetchGeneration) return null; // stale
            const normalizedTickets = (data.results || []).map(normalizeApiRecord);
            const fetchedTotal = data.count || 0;
            tickets.value = normalizedTickets;
            totalCount.value = fetchedTotal;
            return { tickets: normalizedTickets, totalCount: fetchedTotal };
        } catch (err) {
            if (generation === fetchGeneration) {
                fetchError.value = err;
                logger.error('useTicketDataStore: fetchTickets failed', err);
            }
            return null;
        } finally {
            if (generation === fetchGeneration) {
                isLoading.value = false;
            }
        }
    }

    async function fetchTicketById(ticketId) {
        const data = await fetchTicketDetail(ticketId);
        return normalizeApiRecord(data);
    }

    async function apiLazyInit(initialFilterParams) {
        // Share `fetchGeneration` with `fetchTickets` so a later user-initiated
        // fetch (e.g. a filter change flushed via pendingFilterChange) correctly
        // supersedes a slow apiLazyInit response, even if the init response
        // lands last.
        const generation = ++fetchGeneration;
        isLoading.value = true;
        fetchError.value = null;
        try {
            // Unify with the UI's initial filter state so the list fetch and
            // the aggregation fetches ([useTicketTableData.onMounted]) hit the
            // same date window. Falling back to `createInitialFilters()` keeps
            // the guard-side prefetch call (which has no ref yet) consistent.
            const filterParams = initialFilterParams ?? extractFilterParams(createInitialFilters());
            const params = buildTicketListParams(filterParams, {
                page: 1,
                rows: PAGE_SIZE_DEFAULT,
                sortField: 'timestamp',
                sortOrder: -1
            });
            const data = (await fetchTicketList(params)) ?? {};
            if (generation !== fetchGeneration) {
                // Newer fetch already owns `tickets` — still mark initialized
                // so the next guard hit doesn't redundantly re-fire lazyInit.
                isInitialized = true;
                return;
            }
            tickets.value = (data.results || []).map(normalizeApiRecord);
            totalCount.value = data.count || 0;
            isInitialized = true;
        } catch (err) {
            if (generation === fetchGeneration) {
                fetchError.value = err;
                isInitialized = false;
                logger.error('useTicketDataStore: apiLazyInit failed', err);
            }
        } finally {
            if (generation === fetchGeneration) {
                isLoading.value = false;
            }
        }
    }

    // ════════════════════════════════════════════════════════════════════
    //  SHARED — lazyInit dispatches to the correct mode
    // ════════════════════════════════════════════════════════════════════

    async function lazyInit(initialFilterParams) {
        if (isInitialized) return;
        if (initPromise) return initPromise;

        initPromise = (USE_MOCKED ? mockedLazyInit() : apiLazyInit(initialFilterParams)).finally(() => {
            initPromise = null;
        });

        return initPromise;
    }

    return {
        // Shared
        isLoading,
        fetchError,
        lazyInit,

        // Mock mode
        mockedFullProcessedTickets,

        // API mode
        tickets,
        totalCount,
        fetchTickets,
        fetchTicketById
    };
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useTicketDataStore, import.meta.hot));
}
