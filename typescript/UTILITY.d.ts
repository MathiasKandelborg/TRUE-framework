/** @format */

import { Color } from '@material-ui/core'

export declare namespace UTILITY {
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
