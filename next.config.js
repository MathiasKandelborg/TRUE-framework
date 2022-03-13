const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const conf = {
  swcminify: true,
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
    locales: ['da', 'en'],
    defaultLocale: 'en',
    locale: 'en'
  },
  reactStrictMode: true,
  trailingSlash: false,
  poweredByHeader: false,
  rewrites: async () => [
    { source: '/sitemap', destination: '/api/sitemap' },
    { source: '/sitemap.xml', destination: '/api/sitemap' },
    { source: '/browserconfig.xml', destination: '/public/browserconfig.xml' },
    { source: '/robots.txt', destination: '/public/robots.txt' }
  ]
}

module.exports = withPWA(conf)
