import { MetaAPIObject } from './MetaAPIObject'
import { Page } from './Page'

export interface BaseRoute {
  slug: {
    _type: string
    current: string
  }
  includeInSitemap: boolean
  disallowRobots: boolean
}

export interface APIRoute extends MetaAPIObject, BaseRoute {
  page: Page
}
