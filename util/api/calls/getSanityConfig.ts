import resolveRoutes from '@util/resolveRoutes'
import { APISiteConfig } from 'cms/SiteConfig'
import { PageProps } from 'PageProps'
import { ILocalizedAppRoute } from 'settings/AppRoute'
import { getClient } from '..'
import siteConfig from '../queries/singleSiteConfig'

interface IConfig {
  config: APISiteConfig
  allRoutes: ILocalizedAppRoute[]
}

/**
 * @param {string} locale Current language for the app
 * @returns {IConfig} Sanity config and page routes
 */
async function getSanityConfig(locale: string): Promise<IConfig> {
  return getClient(false)
    .fetch(siteConfig(locale))
    .then((config: APISiteConfig) => {
      const sanityRoutes: PageProps['config']['mainNavigation'] = config
        ? config.mainNavigation
        : []

      return {
        config,
        allRoutes: resolveRoutes(sanityRoutes, locale)
      }
    })
}

export default getSanityConfig
