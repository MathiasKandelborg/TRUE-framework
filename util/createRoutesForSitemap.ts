/* eslint-disable no-underscore-dangle */

import { APIRoute, BaseRoute } from 'cms/APIRoute'
import { APIReference } from 'cms/MetaAPIObject'
import { Page } from 'cms/Page'
import { UTILITY } from 'settings/UTILITY'
import sitemapRoutes from './api/queries/allSitemapRoutes'
import client from './sanity'
import { common } from './settings'

export type TSitemapRoute = Omit<APIRoute, '_id' | '_type'>

interface StaticRoute extends BaseRoute {
  page: Pick<APIReference, '_ref'>
  _createdAt: string
  _updatedAt: string
}

interface SMRoute extends APIRoute {
  page: Omit<Page, 'content'>
}

interface ISitemapQueryRoutes {
  [key: string]: SMRoute
}

interface ISitemapStaticRoutes {
  [key: string]: StaticRoute
}

const createStaticRoutesForSitemap = (
  routes: UTILITY.CommonSettings['staticRoutes']
) => {
  const staticRoutes: Array<ISitemapStaticRoutes> = routes.map((route) => {
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

const createRoutesForSitemap = async (): Promise<
  (ISitemapStaticRoutes | ISitemapQueryRoutes)[]
> => {
  const staticRoutes = createStaticRoutesForSitemap(common.staticRoutes)
  const sanityRoutes: Array<ISitemapQueryRoutes> = await client
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
