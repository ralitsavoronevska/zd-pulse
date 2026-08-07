import { cleanAndFormatString } from '@/utils/stringUtils';

/** Fields the API returns in mixed case but that the frontend treats as
 *  case-insensitive. Ticket records lowercase these in `normalizeApiRecord`
 *  (ticketData.js); filter-options responses get the same treatment via
 *  `normalizeFilterOptions` below so the dropdown values match what's
 *  displayed in rows and what ends up in outgoing filter params. */
export const LOWERCASE_FIELDS = ['vip_level', 'sentiment', 'csat_score'];

/**
 * Converts empty, null, or whitespace-only values to 'none'.
 * Preserves case — use for short categorical fields (topic, brand, vip_level, etc.).
 *
 * @param {*} value
 * @returns {string}
 */
export const emptyToNone = (value) => {
    if (typeof value === 'string') {
        const trimmed = value.trim();
        return trimmed === '' ? 'none' : trimmed;
    }
    return value ?? 'none';
};

/**
 * Cleans long-text fields (summary, transcripts) — strips markdown artifacts
 * and excess whitespace. Returns the original value unchanged if falsy.
 *
 * @param {string|null|undefined} value
 * @returns {string|null|undefined}
 */
export const normalizeTranscript = (value) => {
    if (!value) return value;
    return cleanAndFormatString(value);
};

/**
 * Collapse the case-insensitive option arrays in a `/api/ticket-filter-options/`
 * response. The backend currently returns duplicates when the underlying data
 * has mixed case (e.g. `vip_level: ["Gold", "gold", "Normal", "normal", ...]`).
 * Every entry in `LOWERCASE_FIELDS` is lowercased and deduped via `Set`, which
 * also preserves a consistent insertion order.
 *
 * Non-lowercased fields (topic, brand, emails, chat_tags) pass through untouched
 * — those are case-sensitive on both client and server.
 *
 * Returns a new object; does not mutate the input.
 *
 * @param {Object|null|undefined} data
 * @returns {Object|null|undefined}
 */
export function normalizeFilterOptions(data) {
    if (!data || typeof data !== 'object') return data;
    const out = { ...data };
    for (const field of LOWERCASE_FIELDS) {
        const arr = out[field];
        if (!Array.isArray(arr)) continue;
        const seen = new Set();
        for (const v of arr) {
            if (typeof v === 'string') seen.add(v.toLowerCase());
            else if (v != null) seen.add(v);
        }
        out[field] = [...seen];
    }
    return out;
}
