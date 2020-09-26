import { AppRoute } from 'settings/AppRoute'
import { common } from './settings'

type Routes = { slug: { _type: string; current: string } }[]

type ResolvedRoutes = Array<AppRoute>
/**
 * Take an array of routes and combine them with `setting.common.staticRoutes`
 *
 * @param {Routes} routes API routes
 * @returns {ResolvedRoutes} Routes combined with static routes
 */
function resolveRoutes(routes: Routes): ResolvedRoutes {
  const resolvedRoutes = routes.map((route) => {
    return {
      as: `/${route.slug.current}`,
      route: '/[page]',
      name: `${route.slug.current}`
    }
  })

  common.staticRoutes.map((staticRoute) => resolvedRoutes.push(staticRoute))

  return resolvedRoutes
}

export default resolveRoutes
