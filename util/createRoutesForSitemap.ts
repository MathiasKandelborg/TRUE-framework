/** @format */
/* eslint-disable no-underscore-dangle */

import { APIRoute, BaseRoute, Page, PageReference } from 'APITypes'
import { UTILITY } from 'UTILITY'
import sitemapRoutes from './api/queries/sitemapRoutes'
import client from './sanity'
import { common } from './settings'

export type TSitemapRoute = Omit<APIRoute, '_id' | '_type'>

interface StaticRoute extends BaseRoute {
  page: Omit<PageReference, '_id'>
  _createdAt: string
  _updatedAt: string
}

interface SMRoute extends APIRoute {
  page: Omit<Page, 'content'>
}

interface TSitemapQueryRoutes {
  [key: string]: SMRoute
}

interface TSitemapStaticRoutes {
  [key: string]: StaticRoute
}

const createStaticRoutesForSitemap = (
  routes: UTILITY.CommonSettings['staticRoutes']
) => {
  const staticRoutes: Array<TSitemapStaticRoutes> = routes.map((route) => {
    return {
      [`${route.route}`]: {
        page: {
          _ref: ''
        },
        slug: {
          _type: 'slug',
          current: route.route
        },
        _updatedAt: new Date().toUTCString(),
        _createdAt: new Date().toUTCString(),
        includeInSitemap: true,
        disallowRobots: true
      }
    }
  })

  return staticRoutes.map((route) => route)
}

const createRoutesForSitemap = async () => {
  const staticRoutes = createStaticRoutesForSitemap(common.staticRoutes)
  const sanityRoutes: Array<TSitemapQueryRoutes> = await client
    .fetch(sitemapRoutes)
    .then((res: { routes: Array<SMRoute> }) =>
      res.routes
        .filter((route) => route.slug.current)
        .map((route) => {
          return {
            [`${route.slug.current}`]: { ...route }
          }
        })
    )

  const smRoutes = [...staticRoutes, ...sanityRoutes]

  return smRoutes
}

export default createRoutesForSitemap
