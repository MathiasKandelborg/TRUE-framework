const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    register: true,
    scope: '/',
    sw: 'service-worker.js',
    dest: 'public',
    runtimeCaching
  },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US'
  },
  reactStrictMode: true,
  trailingSlash: false,
  poweredByHeader: false,
  webpack: (
    config /* ,{ buildId, dev, isServer, defaultLoaders, webpack } */
  ) =>
    /* This is a placeholder if one ever needs to edit the webpack config */
    config,
  rewrites: async () => [
    { source: '/sitemap', destination: '/api/sitemap' },
    { source: '/sitemap.xml', destination: '/api/sitemap' },
    { source: '/browserconfig.xml', destination: '/public/browserconfig.xml' },
    { source: '/robots.txt', destination: '/public/robots.txt' }
  ]
})
