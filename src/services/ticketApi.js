import api from '@/services/authApi';

/** Format a Date as a local ISO-8601 string with timezone offset (e.g. +03:00). */
function toLocalISOString(date) {
    const pad = (n, len = 2) => String(n).padStart(len, '0');
    const offsetMin = -date.getTimezoneOffset();
    const sign = offsetMin >= 0 ? '+' : '-';
    const absMin = Math.abs(offsetMin);
    const tzHours = pad(Math.floor(absMin / 60));
    const tzMinutes = pad(absMin % 60);
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}${sign}${tzHours}:${tzMinutes}`;
}

/** Return an array for multi-value query params, or undefined if empty. */
function multiParam(arr) {
    return arr?.length ? arr : undefined;
}

// ════════════════════════════════════════════════════════════════════
//  Shared helpers for building filter params
// ════════════════════════════════════════════════════════════════════

/** Timestamp date range (used by all endpoints). */
function addTimestampParams(params, filters) {
    if (filters.startDate) params.timestamp_gte = toLocalISOString(filters.startDate);
    if (filters.endDate) params.timestamp_lt = toLocalISOString(filters.endDate);
}

/** started_at / updated_at date ranges (list + export only). */
function addExtendedDateParams(params, filters) {
    if (filters.startedAtStart) params.started_at_gte = toLocalISOString(filters.startedAtStart);
    if (filters.startedAtEnd) params.started_at_lt = toLocalISOString(filters.startedAtEnd);
    if (filters.updatedAtStart) params.updated_at_gte = toLocalISOString(filters.updatedAtStart);
    if (filters.updatedAtEnd) params.updated_at_lt = toLocalISOString(filters.updatedAtEnd);
}

/** All attribute filters (brand, topic, vip_level, agent/customer email, chat_tags, csat_score, sentiment, ticketid). */
function addAllAttributeFilters(params, filters) {
    const brand = multiParam(filters.brand);
    if (brand) params.brand = brand;

    const topic = multiParam(filters.topic);
    if (topic) params.topic = topic;

    const vipLevel = multiParam(filters.vip_level);
    if (vipLevel) params.vip_level = vipLevel;

    const agentEmail = multiParam(filters.agent_email);
    if (agentEmail) params.agent_email = agentEmail;

    const customerEmail = multiParam(filters.customer_email);
    if (customerEmail) params.customer_email = customerEmail;

    const chatTags = multiParam(filters._chatTagsString);
    if (chatTags) params.chat_tags = chatTags;

    if (filters.csat_score) params.csat_score = filters.csat_score;
    if (filters.sentiment) params.sentiment = filters.sentiment;
    if (filters.ticketid) params.ticketid = filters.ticketid;
}

/** Narrowed attribute filters for the topic-chart endpoint (no emails, no chat_tags, no ticketid). */
function addTopicChartFilters(params, filters) {
    const brand = multiParam(filters.brand);
    if (brand) params.brand = brand;

    const topic = multiParam(filters.topic);
    if (topic) params.topic = topic;

    const vipLevel = multiParam(filters.vip_level);
    if (vipLevel) params.vip_level = vipLevel;

    if (filters.csat_score) params.csat_score = filters.csat_score;
    if (filters.sentiment) params.sentiment = filters.sentiment;
}

/** Text-contains filters as booleans (true if user typed anything). List + export only. */
function addBooleanContainsFilters(params, filters) {
    if (filters.summary) params.summary_contains = true;
    if (filters.chat_transcript) params.chat_transcript_contains = true;
    if (filters.email_transcript) params.email_transcript_contains = true;
}

// ════════════════════════════════════════════════════════════════════
//  Param builders
// ════════════════════════════════════════════════════════════════════

/**
 * GET /api/ticket-conversation-summaries/
 * Full filter set: pagination, ordering, all dates, all attributes,
 * search, ticketid, sentiment_reason, boolean contains filters.
 */
export function buildTicketListParams(filters = {}, lazyParams = {}) {
    const params = {};

    addTimestampParams(params, filters);
    addExtendedDateParams(params, filters);
    addAllAttributeFilters(params, filters);

    // ticketid is an exact-match lookup routed through /api/ticket-summaries/{id}/ —
    // pagination/ordering/search/text-contains are all ignored by the detail endpoint,
    // so skip them entirely to keep the URL clean.
    const isTicketIdLookup = !!filters.ticketid;

    if (!isTicketIdLookup) {
        // Pagination
        if (lazyParams.page > 0) params.page = lazyParams.page;
        if (lazyParams.rows > 0) params.page_size = lazyParams.rows;

        // Sorting — prefix with "-" for descending
        if (lazyParams.sortField) {
            params.ordering = lazyParams.sortOrder === -1 ? `-${lazyParams.sortField}` : lazyParams.sortField;
        }

        // Global search
        if (filters.globalFilter) params.search = filters.globalFilter;

        // Text-contains as booleans
        addBooleanContainsFilters(params, filters);

        // Sentiment reason (text, not boolean)
        if (filters.sentiment_reason) params.sentiment_reason = filters.sentiment_reason;
    }

    return params;
}

/**
 * GET /api/ticket-filter-options/ — NARROWED (date-range + attribute filters)
 * Returns distinct values narrowed by all active filters.
 * Used for inactive filter dropdowns.
 */
export function buildNarrowedFilterOptionsParams(filters = {}) {
    const params = {};
    addTimestampParams(params, filters);
    addAllAttributeFilters(params, filters);
    return params;
}

// API-param-name → filter-key map. The filter object uses `_chatTagsString`
// internally but the API param is `chat_tags`; the rest are 1:1.
const FACETED_FIELD_TO_FILTER_KEY = {
    brand: 'brand',
    topic: 'topic',
    vip_level: 'vip_level',
    agent_email: 'agent_email',
    customer_email: 'customer_email',
    chat_tags: '_chatTagsString',
    csat_score: 'csat_score',
    sentiment: 'sentiment'
};

/**
 * GET /api/ticket-filter-options/ — FACETED (date-range + all attributes EXCEPT one).
 * Returns distinct values narrowed by every active filter except the named field.
 * Used for an active filter's own dropdown so the user sees what other values
 * remain plausible given the OTHER filters — without self-narrowing to just
 * their current selection.
 *
 * @param {Object} filters - flat snapshot from `extractFilterParams()`
 * @param {string} excludeField - API param name (e.g. 'csat_score', 'chat_tags')
 */
export function buildFacetedFilterOptionsParams(filters = {}, excludeField) {
    const filterKey = FACETED_FIELD_TO_FILTER_KEY[excludeField];
    const filtered = filterKey ? { ...filters, [filterKey]: Array.isArray(filters[filterKey]) ? [] : null } : filters;
    const params = {};
    addTimestampParams(params, filtered);
    addAllAttributeFilters(params, filtered);
    return params;
}

/**
 * GET /api/ticket-stats/
 * Timestamp + all attribute filters.
 */
export function buildStatsParams(filters = {}) {
    const params = {};
    addTimestampParams(params, filters);
    addAllAttributeFilters(params, filters);
    return params;
}

/**
 * GET /api/topic-chart-data/
 * Timestamp + brand, topic, vip_level, csat_score, sentiment only.
 * Does NOT accept: agent_email, customer_email, chat_tags, started_at, updated_at.
 */
export function buildTopicChartParams(filters = {}) {
    const params = {};
    addTimestampParams(params, filters);
    addTopicChartFilters(params, filters);
    return params;
}

/**
 * GET /api/vip-csat-data/
 * Timestamp + vip_level, csat_score only.
 * Does NOT accept: brand, topic, agent_email, customer_email, chat_tags, sentiment.
 */
export function buildVipCsatParams(filters = {}) {
    const params = {};
    addTimestampParams(params, filters);

    const vipLevel = multiParam(filters.vip_level);
    if (vipLevel) params.vip_level = vipLevel;

    if (filters.csat_score) params.csat_score = filters.csat_score;

    return params;
}

/**
 * GET /api/ticket-summaries/export/
 * Timestamp + brand, topic, vip_level, csat_score, sentiment,
 * agent_email, customer_email, chat_tags.
 * Does NOT accept: started_at/updated_at, search, ticketid,
 * sentiment_reason, or text-contains params.
 */
export function buildExportParams(filters = {}) {
    const params = {};
    addTimestampParams(params, filters);
    addTopicChartFilters(params, filters);

    const agentEmail = multiParam(filters.agent_email);
    if (agentEmail) params.agent_email = agentEmail;

    const customerEmail = multiParam(filters.customer_email);
    if (customerEmail) params.customer_email = customerEmail;

    const chatTags = multiParam(filters._chatTagsString);
    if (chatTags) params.chat_tags = chatTags;

    return params;
}

/**
 * True when any active filter would make the CSV export disagree with the
 * visible table — i.e. a filter the export endpoint does not honor. The
 * UI uses this to disable the export button. Mirrors the omit-list of
 * `buildExportParams` (no ticketid / search / text-contains / extended dates).
 *
 * Kept next to `buildExportParams` so the two stay in sync — if a builder
 * starts honoring a new param, drop it from this list.
 *
 * @param {Object} filters - flat snapshot from `extractFilterParams()`
 * @returns {boolean}
 */
export function isExportBlocked(filters) {
    if (!filters) return false;
    return !!(
        filters.ticketid ||
        filters.globalFilter ||
        filters.sentiment_reason ||
        filters.chat_transcript ||
        filters.email_transcript ||
        filters.summary ||
        filters.startedAtStart ||
        filters.startedAtEnd ||
        filters.updatedAtStart ||
        filters.updatedAtEnd
    );
}

// ════════════════════════════════════════════════════════════════════
//  API calls
// ════════════════════════════════════════════════════════════════════

/**
 * GET /api/ticket-conversation-summaries/
 * Paginated, filtered, sorted ticket list.
 * Does NOT return chat_transcript / email_transcript text —
 * returns has_chat_transcript / has_email_transcript booleans instead.
 */
export async function fetchTicketList(params) {
    const response = await api.get('/api/ticket-conversation-summaries/', { params });
    return response.data;
}

/**
 * GET /api/ticket-summaries/{ticketid}/
 * Single ticket detail INCLUDING chat_transcript and email_transcript text.
 */
export async function fetchTicketDetail(ticketId) {
    const response = await api.get(`/api/ticket-summaries/${ticketId}/`);
    return response.data;
}

/**
 * GET /api/ticket-filter-options/
 * Returns distinct values for each filter dropdown.
 * Response shape: { topic: [...], brand: [...], vip_level: [...], ... }
 */
export async function fetchFilterOptions(params) {
    const response = await api.get('/api/ticket-filter-options/', { params });
    return response.data;
}

/**
 * GET /api/ticket-stats/
 * Aggregated statistics for the dashboard StatsWidget.
 */
export async function fetchTicketStats(params) {
    const response = await api.get('/api/ticket-stats/', { params });
    return response.data;
}

/**
 * GET /api/topic-chart-data/
 * Topic-level aggregation for charts.
 * Returns { topics: [{ topic, total, negative, percent_negative }] }
 */
export async function fetchTopicChartData(params) {
    const response = await api.get('/api/topic-chart-data/', { params });
    return response.data;
}

/**
 * GET /api/vip-csat-data/
 * VIP segment × date CSAT grid.
 * Returns { segments, dates, data, totals }
 */
export async function fetchVipCsatData(params) {
    const response = await api.get('/api/vip-csat-data/', { params });
    return response.data;
}

/**
 * GET /api/ticket-summaries/export/
 * Streaming CSV export of all filtered tickets (ignores page/page_size).
 * Triggers a browser download.
 */
// Large server-streamed CSV exports can run longer than the default axios
// timeout. Revoke the URL after a delay so Chromium/WebKit don't cancel the
// download before the user-agent has started it.
const REVOKE_DELAY_MS = 1000;

export async function exportTicketsCsv(params) {
    const response = await api.get('/api/ticket-summaries/export/', {
        params,
        responseType: 'blob',
        // Disable the default 10s timeout — the backend streams the whole
        // filtered dataset and can easily exceed that on large date ranges.
        timeout: 0
    });

    const contentDisposition = response.headers['content-disposition'];
    const filenameStarMatch = contentDisposition?.match(/filename\*=(?:UTF-8''|utf-8'')([^;\s]+)/i);
    const filenameMatch = contentDisposition?.match(/filename="?([^";\s]+)"?/);
    const filename = (filenameStarMatch?.[1] && decodeURIComponent(filenameStarMatch[1])) || filenameMatch?.[1] || `tickets-${new Date().toISOString().slice(0, 10)}.csv`;

    const url = URL.createObjectURL(response.data);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(url), REVOKE_DELAY_MS);
}
