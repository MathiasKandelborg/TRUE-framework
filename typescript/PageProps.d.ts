import { APISiteConfig } from 'cms/SiteConfig'
import { AppRoute } from 'settings/AppRoute'

export interface PageProps {
  config: APISiteConfig
  allRoutes: Array<AppRoute>
  preview?: boolean
}
