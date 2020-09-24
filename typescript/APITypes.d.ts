
import { TextBlock } from 'PortableText'

export interface BaseAPIObject {
  _type: string
}

export interface MetaAPIObject extends BaseAPIObject {
  _id: string
  _rev: string
  _createdAt: string
  _updatedAt: string
}

export interface PageContent extends BaseAPIObject {
  _key: string
  heading: string
  label: string
  text: TextBlock | Array<TextBlock>
}

export interface Page extends MetaAPIObject {
  title: string
  description: string
  content?: PageContent
}

export interface PageReference {
  _id: string
  _ref: string
}

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
