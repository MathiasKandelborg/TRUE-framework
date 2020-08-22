/** @format */

export interface AllPagesProps {
  sanityConfig: {
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
      route: string
      as: string
    }>
  }
}
