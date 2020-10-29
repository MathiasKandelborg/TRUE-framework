import { BaseRoute } from 'cms/APIRoute'
import { AppRoute } from 'settings/AppRoute'
import capitalizeString from './capitalizeString'
import { common } from './settings'

/**
 * Take an array of routes and combine them with `setting.common.staticRoutes`
 *
 * @param {BaseRoute[]} routes API routes
 * @returns {Array<AppRoute>} Routes combined with static routes
 */
function resolveRoutes(routes: BaseRoute[]): Array<AppRoute> {
  const resolvedRoutes = common.staticRoutes.map((staticRoute) => staticRoute)

  routes.map((route) =>
    resolvedRoutes.push({
      as: `/${route.slug.current}`,
      route: '/[page]',
      name: `${capitalizeString(route.slug.current)}`,
      follow: route.disallowRobots,
      index: route.includeInSitemap
    })
  )

  return resolvedRoutes
}

export default resolveRoutes
