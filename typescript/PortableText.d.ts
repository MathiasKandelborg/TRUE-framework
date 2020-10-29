export type MetaText = {
  _type: string
  _key: string
}

interface TextBlockMarkDefs extends MetaText {
  [key: string]: string
}

export interface BaseTextObject extends MetaText {
  text: string
  style: string
  markDefs: Array<TextBlockMarkDefs> | [null]
}

/** See: https://github.com/sanity-io/block-content-to-hyperscript/blob/master/src/serializers.js#L130 */
export type SpanTypes =
  | 'em'
  | 'strong'
  | 'strike-through'
  | 'underline'
  | 'link'

type SpanMark = {
  marks: SpanTypes[] | [null]
}

export interface SpanTextObject extends Pick<MetaText, '_type'> {
  _type: 'span'
  marks: Array<SpanMark>
}

export interface TextBlock extends MetaText {
  _type: 'block'
  style: string
  children: Array<BaseTextObject> /*  | Array<SpanTextObject> */
  markDefs: Array<TextBlockMarkDefs>
  listItem?: string
  level?: string | number // Guessing: https://github.com/portabletext/portabletext#level
}
