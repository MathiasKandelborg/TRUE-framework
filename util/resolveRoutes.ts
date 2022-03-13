import { BaseRoute } from 'cms/APIRoute'
import { ILocalizedAppRoute } from 'settings/AppRoute'
import capitalizeString from './capitalizeString'
import { common } from './settings'

/**
 * Take an array of routes and combine them with `setting.common.staticRoutes`
 *
 * @param {string} locale Current locale
 * @param {BaseRoute[]} routes API routes
 * @returns {Array<ILocalizedAppRoute>} Routes combined with static routes
 */
function resolveRoutes(
  routes: BaseRoute[],
  locale: string
): Array<ILocalizedAppRoute> {
  const localizedRoutes = common.staticRoutes.map(
    (staticRoute) => staticRoute[`${locale}`]
  )

  routes?.map((route) =>
    localizedRoutes.push({
      as: `/${route.slug.current}`,
      route: '/[page]',
      name: `${capitalizeString(route.slug.current)}`,
      follow: route.disallowRobots,
      index: route.includeInSitemap
    })
  )

  return localizedRoutes
}

export default resolveRoutes
