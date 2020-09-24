import { common } from './settings'

type Routes = [{ slug: { _type: string; current: string } }]

const resolveRoutes = (routes: Routes) => {
  const resolvedRoutes = routes.map((route) => {
    return { route: `/${route.slug.current}`, as: route.slug.current }
  })

  common.staticRoutes.map((staticRoute) => resolvedRoutes.push(staticRoute))

  return resolvedRoutes
}

export default resolveRoutes
