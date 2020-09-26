import * as MUI from '@material-ui/core'
import { AppRoute } from 'settings/AppRoute'

/* eslint-disable @typescript-eslint/naming-convention */
export declare namespace UTILITY {
  /** Common Settings used in many places throughout the codebase */
  export interface CommonSettings {
    staticRoutes: Array<AppRoute>
  }
  /** UI Settings used throughout the codebase */
  export interface UISettings {
    DarkTheme: boolean
    MainColor: MUI.Color
    SecondaryColor: MUI.Color
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
