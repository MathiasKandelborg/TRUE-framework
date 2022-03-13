import { MetaAPIObject, APISlug } from 'cms/MetaAPIObject'
import { TextBlock } from 'PortableText'
import { Category } from './Category'

export interface Product extends MetaAPIObject {
  title: string
  description: TextBlock[]
  url: APISlug
  categories: Category[]
  __i18n_lang: string
}
