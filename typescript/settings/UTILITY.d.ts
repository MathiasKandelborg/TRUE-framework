import { Color } from '@material-ui/core'
import { BaseRoute } from 'APITypes'

/* eslint-disable @typescript-eslint/naming-convention */
export declare namespace UTILITY {
  import PageReference from 'PortableText'

  export interface StaticRoute extends BaseRoute {
    page: PageReference
  }
  /** Common Settings used in many places throughout the codebase */
  export interface CommonSettings {
    staticRoutes: Array<{
      route: string
      as: string
    }>
  }
  /** UI Settings used throughout the codebase */
  export interface UISettings {
    DarkTheme: boolean
    MainColor: Color
    SecondaryColor: Color
    Fonts: string[]
    CONSTANTS: {
      DRAWER_WIDTH: number
    }
  }
  /** Constants used throughout the codebase */
  export interface Constants {
    TITLE: string
    PORT: string
    DEV: boolean
    NODE: boolean
    BROWSER: boolean
  }
}
