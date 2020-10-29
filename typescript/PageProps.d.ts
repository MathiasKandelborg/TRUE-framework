import { APISiteConfig } from 'cms/SiteConfig'
import { AppRoute } from 'settings/AppRoute'

export interface PageProps {
  config: APISiteConfig
  allRoutes: Array<AppRoute>
  preview?: boolean
  locale?: string
  locales?: string[]
  translation?: { title: string }[] // TODO: Figure typing for native I18n
}
