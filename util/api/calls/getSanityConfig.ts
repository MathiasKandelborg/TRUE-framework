import resolveRoutes from '@util/resolveRoutes'
import { APISiteConfig } from 'cms/SiteConfig'
import { PageProps } from 'PageProps'
import { AppRoute } from 'settings/AppRoute'
import { getClient } from '..'
import siteConfig from '../queries/singleSiteConfig'

interface IConfig {
  config: APISiteConfig
  allRoutes: AppRoute[]
}

/**
 * @returns {IConfig} Sanity config and page routes
 */
async function getSanityConfig(): Promise<IConfig> {
  return getClient(false)
    .fetch(siteConfig)
    .then((config: APISiteConfig) => {
      const sanityRoutes: PageProps['config']['mainNavigation'] =
        config.mainNavigation

      return {
        config,
        allRoutes: resolveRoutes(sanityRoutes)
      }
    })
}

export default getSanityConfig
