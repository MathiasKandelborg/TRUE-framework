export interface IAppRoute {
  [key: string]: {
    name: string
    as: string
    route: string
    index: boolean
    follow: boolean
  }
}

export interface ILocalizedAppRoute {
  name: string
  as: string
  route: string
  index: boolean
  follow: boolean
}
