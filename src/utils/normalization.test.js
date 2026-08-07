// Pure-transform tests for `src/utils/normalization.js`.
//
// These functions sit at the boundary between API responses and store
// state. A regression here is the kind of bug that produces "filter
// dropdown shows Gold AND gold" or "topic field is null instead of 'none'"
// — silent data-shape problems that are hard to catch without unit tests.

import { describe, it, expect } from 'vitest';
import { emptyToNone, normalizeFilterOptions, normalizeTranscript, LOWERCASE_FIELDS } from './normalization';

describe('emptyToNone', () => {
    it("returns 'none' for null", () => {
        expect(emptyToNone(null)).toBe('none');
    });

    it("returns 'none' for undefined", () => {
        expect(emptyToNone(undefined)).toBe('none');
    });

    it("returns 'none' for empty string", () => {
        expect(emptyToNone('')).toBe('none');
    });

    it("returns 'none' for whitespace-only string", () => {
        // Whitespace must collapse to 'none' or filter dropdowns get a
        // ghost ' ' entry.
        expect(emptyToNone('   ')).toBe('none');
        expect(emptyToNone('\t\n')).toBe('none');
    });

    it('preserves a normal string and trims it', () => {
        expect(emptyToNone('Gold')).toBe('Gold');
        expect(emptyToNone('  Gold  ')).toBe('Gold');
    });

    it('preserves case (does NOT lowercase) — case-folding is a separate pass', () => {
        // The lowercase-fields pass is in `normalizeCategoricalFields` /
        // `normalizeFilterOptions`. `emptyToNone` only handles emptiness.
        expect(emptyToNone('Gold')).toBe('Gold');
        expect(emptyToNone('VERY POSITIVE')).toBe('VERY POSITIVE');
    });

    it('passes through non-string truthy values', () => {
        // 0 is falsy in JS but is a valid value — the `?? 'none'` fallback
        // only applies to null/undefined.
        expect(emptyToNone(0)).toBe(0);
        expect(emptyToNone(false)).toBe(false);
        expect(emptyToNone(42)).toBe(42);
    });
});

describe('normalizeFilterOptions', () => {
    it('lowercases + dedupes the case-insensitive fields', () => {
        const input = {
            vip_level: ['Gold', 'gold', 'Normal', 'normal', 'PLATINUM'],
            sentiment: ['Positive', 'positive', 'Negative'],
            csat_score: ['Good', 'good', 'BAD']
        };
        const out = normalizeFilterOptions(input);
        expect(out.vip_level).toEqual(['gold', 'normal', 'platinum']);
        expect(out.sentiment).toEqual(['positive', 'negative']);
        expect(out.csat_score).toEqual(['good', 'bad']);
    });

    it('preserves insertion order through the Set', () => {
        // Order matters — frontend sorts later, but the input order
        // should be preserved through the dedup itself for predictability.
        const out = normalizeFilterOptions({ vip_level: ['Bronze', 'gold', 'Bronze', 'Silver'] });
        expect(out.vip_level).toEqual(['bronze', 'gold', 'silver']);
    });

    it('leaves case-sensitive fields untouched', () => {
        // topic, brand, emails, chat_tags are case-sensitive on both ends —
        // `Game Issue` and `game issue` are DIFFERENT topics, not duplicates.
        const input = {
            topic: ['Game Issue', 'Bonus Issue'],
            brand: ['Aruba Bet', 'BetRiot VIP'],
            customer_email: ['User@Example.com'],
            agent_email: ['Agent@Support.com'],
            chat_tags: ['Urgent', 'urgent']
        };
        const out = normalizeFilterOptions(input);
        expect(out.topic).toEqual(['Game Issue', 'Bonus Issue']);
        expect(out.brand).toEqual(['Aruba Bet', 'BetRiot VIP']);
        expect(out.customer_email).toEqual(['User@Example.com']);
        expect(out.agent_email).toEqual(['Agent@Support.com']);
        expect(out.chat_tags).toEqual(['Urgent', 'urgent']);
    });

    it('does not mutate the input', () => {
        const input = { vip_level: ['Gold', 'gold'] };
        const original = JSON.parse(JSON.stringify(input));
        normalizeFilterOptions(input);
        expect(input).toEqual(original);
    });

    it('returns null/undefined unchanged', () => {
        expect(normalizeFilterOptions(null)).toBe(null);
        expect(normalizeFilterOptions(undefined)).toBe(undefined);
    });

    it('returns non-objects unchanged (defensive against bad shapes)', () => {
        expect(normalizeFilterOptions('not-an-object')).toBe('not-an-object');
        expect(normalizeFilterOptions(42)).toBe(42);
    });

    it('handles missing case-insensitive fields gracefully', () => {
        // Backend may omit empty arrays — the function should not crash.
        const out = normalizeFilterOptions({ topic: ['Game Issue'] });
        expect(out.topic).toEqual(['Game Issue']);
        expect(out.vip_level).toBeUndefined();
        expect(out.sentiment).toBeUndefined();
    });

    it('skips non-array values for case-insensitive fields', () => {
        // Defensive — if backend returns null/string for a field, just leave it.
        const out = normalizeFilterOptions({ vip_level: null, sentiment: 'somehow-a-string' });
        expect(out.vip_level).toBe(null);
        expect(out.sentiment).toBe('somehow-a-string');
    });

    it('drops null/undefined entries inside arrays during dedup', () => {
        // Backend has been seen returning `[null, "Gold", "gold"]` — the
        // null entry would otherwise become a ghost dropdown option.
        const out = normalizeFilterOptions({ vip_level: ['Gold', null, 'gold', undefined] });
        expect(out.vip_level).toEqual(['gold']);
    });
});

describe('normalizeTranscript', () => {
    // The full text-cleaning is in `cleanAndFormatString` (stringUtils.js) and
    // is exercised via integration. These tests pin the wrapper's contract:
    // empty/falsy passes through untouched, and non-empty is delegated.

    it('returns null unchanged', () => {
        expect(normalizeTranscript(null)).toBe(null);
    });

    it('returns undefined unchanged', () => {
        expect(normalizeTranscript(undefined)).toBe(undefined);
    });

    it('returns empty string unchanged (does not invoke the cleaner)', () => {
        expect(normalizeTranscript('')).toBe('');
    });

    it('passes non-string falsy values through unchanged', () => {
        // 0 is falsy in JS but a valid value — the wrapper short-circuits
        // on truthy-check so 0 is returned as-is rather than coerced.
        expect(normalizeTranscript(0)).toBe(0);
        expect(normalizeTranscript(false)).toBe(false);
    });

    it('strips markdown image syntax from the cleaned output', () => {
        // Light end-to-end check that the wrapper actually delegates to the
        // cleaner — guards against an accidental no-op refactor of the body.
        const out = normalizeTranscript('Hello ![alt](http://x/y.png) world');
        expect(out).toBe('Hello  world');
    });

    it('returns a string for any non-empty string input', () => {
        // Stronger than "calls cleaner": the contract is that a truthy
        // string in always produces a string out.
        const out = normalizeTranscript('Customer: Hi there');
        expect(typeof out).toBe('string');
    });
});

describe('LOWERCASE_FIELDS', () => {
    it('exports the expected case-insensitive field set', () => {
        // This is part of the public contract — `normalizeApiRecord` reads
        // it too. Pinning the value here means accidental edits get caught.
        expect(LOWERCASE_FIELDS).toEqual(['vip_level', 'sentiment', 'csat_score']);
    });
});
