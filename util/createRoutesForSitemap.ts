/** @format */

import { UTILITY } from 'UTILITY'
import sitemapRoutes from './api/queries/sitemapRoutes'
import client from './sanity'
import { common } from './settings'

export interface TSitemapQueryRoute {
  _id: string
  _type: string
  page: {
    _id?: string
    title: string
    _createdAt?: string
    _editedAt?: string
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
        page: {
          title: route.as,
          _editedAt: Date(),
          _createdAt: Date()
        },
        slug: {
          current: route.route
        },
        _editedAt: Date(),
        _createdAt: Date(),
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
    .then((res: { routes: Array<TSitemapQueryRoute> }) => {
      const { routes } = res

      const fRoutes = routes
        .filter((r) => r.slug.current)
        .map((ro) => {
          return {
            [`${ro.slug.current}`]: {
              page: {
                title: ro.page.title
              },
              slug: {
                current: ro.slug.current
              },
              // eslint-disable-next-line no-underscore-dangle
              _updatedAt: new Date(ro.page._editedAt),
              // eslint-disable-next-line no-underscore-dangle
              _createdAt: new Date(ro.page._createdAt),
              includeInSitemap: true,
              disallowRobot: true
            }
          }
        })

      return fRoutes
    })

  const routess = [...staticRoutes, ...sanityRoutes]

  return routess
}

export default createRoutesForSitemap
