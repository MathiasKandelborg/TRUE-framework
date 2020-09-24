import { MetaAPIObject } from 'APITypes'
import { TextBlock } from 'PortableText'

export interface Category extends MetaAPIObject {
  description: TextBlock
  title: string
  products: any[]
}
