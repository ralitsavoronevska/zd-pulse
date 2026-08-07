import { describe, expect, it } from 'vitest';

import { maskCustomerEmail } from './stringUtils';

describe('maskCustomerEmail', () => {
    it('returns empty, none, and non-string values unchanged', () => {
        expect(maskCustomerEmail('')).toBe('');
        expect(maskCustomerEmail('none')).toBe('none');
        expect(maskCustomerEmail(null)).toBeNull();
        expect(maskCustomerEmail(undefined)).toBeUndefined();
    });

    it('replaces a string with asterisks matching its length', () => {
        const email = 'jane@example.com';
        expect(maskCustomerEmail(email)).toBe('*'.repeat(email.length));
    });
});
