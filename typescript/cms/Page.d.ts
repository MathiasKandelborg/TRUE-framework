import { TextBlock } from 'PortableText'
import { BaseAPIObject, MetaAPIObject } from './MetaAPIObject'

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

