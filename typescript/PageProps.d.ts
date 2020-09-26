export interface PageProps {
  config: {
    title: string
    url: string
    logo: {
      asset: { extension: string; url: string }
    }
    mainNavigation: [{ slug: { _type: string; current: string } }]
    footerNavigation: [{ slug: string }]
  }
  allRoutes: Array<{
    name: string
    route: string
    as: string
  }>
  preview: boolean
}
