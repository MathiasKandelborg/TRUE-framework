/** @format */

export {}

// I Made this file to avoid deleting potentially useful code.

/**
 * JAVASCRIPT SANITY client
 */
/* 
const sanityClient = require('@sanity/client')

const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  token: '', // or leave blank to be anonymous user
  useCdn: false // `false` if you want to ensure fresh data
})

module.exports = client
 */

/**
 * REDUCE ROUTES QUERY
 */
/* const reduceRoutesQuery = (obj, route) => {
  const { page = {}, slug = {} } = route
  const { _createdAt, _updatedAt } = page
  const { includeInSitemap, disallowRobot } = route
  const path = route.slug.current === '/' ? '/' : `/${route.slug.current}`
  obj[path] = {
    query: {
      page: slug.current
    },
    includeInSitemap,
    disallowRobot,
    _createdAt,
    _updatedAt,
    page: `/[page]`
  }

  return obj
}

module.exports = reduceRoutesQuery */

/**
 * CREATE ROUTES & REWRITES
 * Get routes for sitemap and create a rewrites array
 */

/* const client = require('./sanity-client')
const reduceRoutesQuery = require('./util/reduceRoutesQuery')
const routesQuery = require('./util/api/queries/sitemapRoutes'


let reWrites = [
  {
    source: '/:path*',
    destination: '/:path*'
  }
]


let nextRoutes

client.fetch(routesQuery).then((res) => {
  const { routes = [] } = res
  nextRoutes = {
    '/': {
      page: '/',
      includeInSitemap: true,
      _updatedAt: Date('2020-08-12T22:24:25.888Z')
    },
    '/about': {
      page: '/about',
      includeInSitemap: true,
      _updatedAt: Date('2020-08-12T22:24:25.888Z')
    },
    // Routes imported from sanity
    ...routes.filter(({ slug }) => slug.current).reduce(reduceRoutesQuery, {})
  }

    for (const [key, value] of Object.entries(nextRoutes)) {
    reWrites.push({ source: key, destination: value.page })
  }
})
 */

/**
 * EXPORT SITEMAP FUNCTION
 */

/* const { SitemapStream, streamToPromise } = require('sitemap')
const fs = require('fs')
const { Readable } = require('stream')
const { exportPathMap } = require('./next.config')
const client = require('./sanity-client')

client.fetch(`*[_id == "global-config"] {url}[0]`).then((config) => {
  if (!config.url || config.url === '') {
    return Error('Please set a url in your site config in the sanity studio')
  }
  // Init global array for pages
  const filteredSitemapPages = []

  // Start sitemap stream
  const sitemap = new SitemapStream({
    hostname: config.url,
    cacheTime: 600000 // 600 sec (10 min) cache purge period
  })

  exportPathMap().then(async (response) => {
    // Map over the route names (keys) retrieved from next.config.js
    Object.keys(response).map((page) => {
      // Get the object associated with the route name
      const { pageObject } = response[`${page}`]

      // Take the best properties (maybe just those you need)
      const { includeInSitemap, disallowRobots, _updatedAt } = pageObject
      // TODO: Add robots.txt check
      if (includeInSitemap) {
        filteredSitemapPages.push({
          url: `${page}`,
          lastmod: Date(_updatedAt || undefined)
        })
      }
      // Honoring wishes
    })

    streamToPromise(Readable.from(filteredSitemapPages).pipe(sitemap)).then(
      (sitemapOutput) => {
        console.log(sitemapOutput.toString())

        fs.writeFile(`./out/sitemap.xml`, sitemapOutput.toString(), (err) => {
          if (err) throw err
          console.log(`sitemap.xml updated`)
        })
      }
    )
  })
})
 */
