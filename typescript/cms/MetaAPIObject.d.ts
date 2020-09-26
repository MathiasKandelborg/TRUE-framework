export interface BaseAPIObject {
  _type: string
}

export interface APIReference {
  _id: string
  _ref: string
}

export interface APISlug {
  _type: 'slug'
  current: string
}

export interface MetaAPIObject extends BaseAPIObject {
  _id: string
  _rev: string
  _createdAt: string
  _updatedAt: string
}
