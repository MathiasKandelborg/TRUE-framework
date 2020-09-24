import { common } from './settings'

type Routes = [{ slug: { _type: string; current: string } }]

/**
 * @param routes
 */
function resolveRoutes(routes: Routes) {
  const resolvedRoutes = routes.map((route) => {
    return { route: `/${route.slug.current}`, as: route.slug.current }
  })

  common.staticRoutes.map((staticRoute) => resolvedRoutes.push(staticRoute))

  return resolvedRoutes
}

export default resolveRoutes
