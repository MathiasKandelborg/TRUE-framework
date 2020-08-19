/** @format */

import { UTILITY } from 'UTILITY'
import sitemapRoutes from './api/queries/sitemapRoutes'
import client from './sanity'
import { common } from './settings'

export interface TSitemapQueryRoute {
  _id: string
  _type: string
  _updatedAt?: string | Date
  _createdAt?: string | Date
  page: {
    _id?: string
    title: string
    _createdAt?: string | Date
    _updatedAt?: string | Date
    slug?: string
    description?: string
    content?: [{ _type: string; _key: string; [key: string]: string }]
  }
  slug: {
    _type?: string
    current: string
  }
  includeInSitemap: boolean
  disallowRobot: boolean
}

export type TSitemapRoute = Omit<TSitemapQueryRoute, '_id' | '_type'>

interface TSitemapQueryRoutes {
  [x: string]: TSitemapRoute
}

const createStaticRoutesForSitemap = (
  routes: UTILITY.CommonSettings['staticRoutes']
) => {
  const staticRoutes: Array<TSitemapQueryRoutes> = routes.map((route) => {
    return {
      [`${route.route}`]: {
        _id: undefined,
        page: {
          title: route.as,
          _updatedAt: '2020-08-18T00:13:55.000Z',
          _createdAt: '2020-08-18T00:13:55.000Z'
        },
        slug: {
          current: route.route
        },
        _updatedAt: '2020-08-18T00:13:55.000Z',
        _createdAt: '2020-08-18T00:13:55.000Z',
        includeInSitemap: true,
        disallowRobot: true
      }
    }
  })

  return staticRoutes.map((route) => route)
}

const createRoutesForSitemap = async () => {
  const staticRoutes = createStaticRoutesForSitemap(common.staticRoutes)
  const sanityRoutes: Array<TSitemapQueryRoutes> = await client
    .fetch(sitemapRoutes)
    .then((res: { routes: Array<TSitemapQueryRoute> }) =>
      res.routes
        .filter((route) => route.slug.current)
        .map((route) => {
          return {
            [`${route.slug.current}`]: {
              page: {
                title: route.page.title,
                // eslint-disable-next-line no-underscore-dangle
                _updatedAt: new Date(route.page._updatedAt!),
                // eslint-disable-next-line no-underscore-dangle
                _createdAt: new Date(route.page._createdAt!)
              },
              slug: {
                current: route.slug.current
              },
              includeInSitemap: true,
              disallowRobot: true
            }
          }
        })
    )

  const smRoutes = [...staticRoutes, ...sanityRoutes]

  return smRoutes
}

export default createRoutesForSitemap
