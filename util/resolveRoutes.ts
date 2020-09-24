import { common } from './settings'

type Routes = { slug: { _type: string; current: string } }[]

type ResolvedRoutes = {
  route: string
  as: string
}[]
/**
 * Take an array of routes and combine them with `setting.common.staticRoutes`
 *
 * @param {Routes} routes API routes
 * @returns {ResolvedRoutes} Routes combined with static routes
 */
function resolveRoutes(routes: Routes): ResolvedRoutes {
  const resolvedRoutes = routes.map((route) => {
    return { route: `/${route.slug.current}`, as: route.slug.current }
  })

  common.staticRoutes.map((staticRoute) => resolvedRoutes.push(staticRoute))

  return resolvedRoutes
}

export default resolveRoutes
