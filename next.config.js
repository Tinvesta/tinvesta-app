const withPWA = require('next-pwa');

const ContentSecurityPolicy = `
  script-src * 'unsafe-inline' 'unsafe-eval' blob:;
  style-src * 'unsafe-inline' blob:;
  img-src * data: blob:;
  media-src * data:
`;

// https://nextjs.org/docs/advanced-features/security-headers
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=15552000; includeSubDomains; preload',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'no-referrer-when-downgrade',
  },
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
  },
];

module.exports = withPWA({
  reactStrictMode: true,
  experimental: {
    esmExternals: false,
  },
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NEXT_PUBLIC_APP_ENV === 'local',
  },
  images: {
    // TODO - fix later
    // loader: 'imgix',
    // path: 'https://noop/',
    domains: ['fkntlethkbyborzenxpp.supabase.co', 'lh3.googleusercontent.com'],
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        permanent: true,
        source: '/dashboard',
        destination: '/dashboard/discover',
      },
    ];
  },
});
