/**
 * Site Configuration & Base URL Provider
 * Automatically detects the domain across local development, Vercel production/preview deployments,
 * Netlify, custom domain environment variables, and runtime request headers.
 */

export function getBaseUrl(requestHost?: string | null, requestProto?: string | null): string {
  // 1. Explicit user environment variable override (highest priority if defined)
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '');
  }
  if (process.env.SITE_URL) {
    return process.env.SITE_URL.replace(/\/$/, '');
  }

  // 2. Incoming request host (dynamically matches the exact domain requested by Googlebot / user)
  if (requestHost) {
    const isLocal = requestHost.includes('localhost') || requestHost.includes('127.0.0.1');
    const proto = requestProto || (isLocal ? 'http' : 'https');
    return `${proto}://${requestHost}`;
  }

  // 3. Vercel Production URL (set automatically by Vercel on all production deployments)
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL.replace(/\/$/, '')}`;
  }

  // 4. Vercel Preview / Deployment URL
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, '')}`;
  }

  // 5. Netlify URL
  if (process.env.URL) {
    return process.env.URL.replace(/\/$/, '');
  }

  // 6. Default domain fallback
  return 'https://toolnest.app';
}
