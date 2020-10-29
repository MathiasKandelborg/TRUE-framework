const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const conf = {
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    register: true,
    scope: '/',
    sw: 'service-worker.js',
    dest: 'public',
    runtimeCaching
  },
  images: {
    deviceSizes: [600, 960, 1280, 1920]
  },
  i18n: {
    locales: ['en-US', 'da-DK', 'da', 'en'],
    defaultLocale: 'en-US',
    locale: 'en-US'
  },
  reactStrictMode: true,
  trailingSlash: false,
  poweredByHeader: false,
  target: 'serverless',
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
}

module.exports = withPWA(conf)
