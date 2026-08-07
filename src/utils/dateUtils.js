/**
 * Formats a Date object to MM/DD/YYYY string (en-US locale by default).
 *
 * @param {Date} value - Date object to format
 * @param {string} [locale='en-US'] - BCP 47 locale tag
 * @returns {string} Formatted date string, or empty string if value is invalid
 */
export function formatDate(value, locale = 'en-US', includeTime = false) {
    if (!value || !(value instanceof Date)) return '';
    const opts = { day: '2-digit', month: '2-digit', year: 'numeric' };
    if (includeTime) {
        opts.hour = '2-digit';
        opts.minute = '2-digit';
    }
    return value.toLocaleDateString(locale, opts);
}
