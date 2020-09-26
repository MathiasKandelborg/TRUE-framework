import { MetaAPIObject, APISlug } from 'cms/MetaAPIObject'
import { TextBlock } from 'PortableText'

export interface Category extends MetaAPIObject {
  description: TextBlock[]
  title: string
  url: APISlug
}
