/** @format */

export interface AllPagesProps {
  allRoutes: Array<{ route: string; as: string }>

  config: {
    title: string
    url: string
    logo: {
      asset: { extension: string; url: string }
    }
    mainNavigation: [{ slug: string }]
    footerNavigation: [{ slug: string }]
  }
  materialUI
}
