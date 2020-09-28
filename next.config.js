const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    register: true,
    scope: '/',
    sw: 'service-worker.js',

    dest: 'public'
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
    { source: '/robots', destination: '/public/robots.txt' },
    { source: '/robots.txt', destination: '/public/robots.txt' }
  ]
})
