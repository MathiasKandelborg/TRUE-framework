export interface APISiteConfig {
  title: string
  url: string
  logo: {
    asset: { extension: string; url: string }
  }
  mainNavigation: [{ slug: { _type: string; current: string } }]
  footerNavigation: [{ slug: string }]
}
