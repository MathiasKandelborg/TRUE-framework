import { BaseRoute } from './APIRoute'

export interface APISiteConfig {
  title: string
  url: string
  logo: {
    asset: { extension: string; url: string }
  }
  mainNavigation: BaseRoute[]
  footerNavigation: [{ slug: string }]
}
