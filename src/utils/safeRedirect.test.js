// Open-redirect defence-in-depth tests for `safeRedirectPath`.
//
// This function gates the post-login `?redirect=` query value before it
// flows into `router.replace`. A regression here is a real security risk
// (login → attacker-controlled domain), so each rejection rule is asserted
// by name. Test cases double as documentation of what the function rejects
// and why.

import { describe, it, expect } from 'vitest';
import { safeRedirectPath } from './safeRedirect';

describe('safeRedirectPath', () => {
    // ── Accept: app-internal paths ──
    it('accepts an app-internal absolute path', () => {
        expect(safeRedirectPath('/dashboard')).toBe('/dashboard');
    });

    it('accepts a path with query and hash', () => {
        expect(safeRedirectPath('/orders?status=open#top')).toBe('/orders?status=open#top');
    });

    it('accepts the bare root path', () => {
        expect(safeRedirectPath('/')).toBe('/');
    });

    // ── Reject: non-string / empty input ──
    it('rejects undefined', () => {
        expect(safeRedirectPath(undefined)).toBe('/');
    });

    it('rejects null', () => {
        expect(safeRedirectPath(null)).toBe('/');
    });

    it('rejects empty string', () => {
        expect(safeRedirectPath('')).toBe('/');
    });

    it('rejects numbers', () => {
        expect(safeRedirectPath(123)).toBe('/');
    });

    it('rejects arrays (Vue Router can produce these for `?redirect=a&redirect=b`)', () => {
        expect(safeRedirectPath(['/safe'])).toBe('/');
    });

    // ── Reject: absolute / external URLs ──
    it('rejects http:// URLs', () => {
        expect(safeRedirectPath('http://evil.com/path')).toBe('/');
    });

    it('rejects https:// URLs', () => {
        expect(safeRedirectPath('https://evil.com/path')).toBe('/');
    });

    it('rejects mailto: URLs', () => {
        expect(safeRedirectPath('mailto:victim@example.com')).toBe('/');
    });

    it('rejects javascript: URLs', () => {
        // Critical XSS surface — never let through.
        expect(safeRedirectPath('javascript:alert(1)')).toBe('/');
    });

    it('rejects data: URLs', () => {
        expect(safeRedirectPath('data:text/html,<script>alert(1)</script>')).toBe('/');
    });

    // ── Reject: protocol-relative + backslash tricks ──
    it('rejects protocol-relative URLs (//evil.com)', () => {
        // Browsers resolve `//evil.com` against the current page protocol,
        // sending the user off-site. Vue Router would let this through.
        expect(safeRedirectPath('//evil.com')).toBe('/');
    });

    it('rejects backslash tricks (/\\evil.com)', () => {
        // Some routers/parsers normalize backslashes to forward slashes,
        // turning `/\evil.com` into `//evil.com`.
        expect(safeRedirectPath('/\\evil.com')).toBe('/');
    });

    // ── Reject: paths that don't start with a slash ──
    it('rejects relative paths', () => {
        expect(safeRedirectPath('dashboard')).toBe('/');
    });

    it('rejects paths that start with a dot', () => {
        expect(safeRedirectPath('./dashboard')).toBe('/');
    });

    // ── Reject: /login post-login ping-pong prevention ──
    it('rejects /login itself', () => {
        // Without this, `?redirect=/login` after a successful login would
        // bounce the user back to the login page.
        expect(safeRedirectPath('/login')).toBe('/');
    });

    it('rejects /login subpaths', () => {
        expect(safeRedirectPath('/login/forgot')).toBe('/');
    });

    it('rejects /login with a query string', () => {
        // Query stripping happens BEFORE the equality check — so
        // /login?foo=bar should also be rejected.
        expect(safeRedirectPath('/login?foo=bar')).toBe('/');
    });

    it('rejects /login with a hash', () => {
        expect(safeRedirectPath('/login#section')).toBe('/');
    });

    // ── Edge cases that should still pass ──
    it('accepts /loginx (different path that just shares a prefix)', () => {
        // `/loginx` doesn't equal `/login` and doesn't start with `/login/`.
        // Make sure the prefix check uses a slash boundary.
        expect(safeRedirectPath('/loginx')).toBe('/loginx');
    });
});
