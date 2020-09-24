module.exports = {
  reactStrictMode: true,
  trailingSlash: false,
  poweredByHeader: false,
  webpack: (
    config /* ,{ buildId, dev, isServer, defaultLoaders, webpack } */
  ) => {
    /* This is a placeholder if one ever needs to edit the webpack config */
    return config
  },
  rewrites: async () => {
    return [
      { source: '/sitemap', destination: '/api/sitemap' },
      { source: '/sitemap.xml', destination: '/api/sitemap' }
    ]
  }
}
