import * as MUI from '@material-ui/core'
import { UTILITY } from 'settings/UTILITY'

const ui: UTILITY.UISettings = {
  DarkTheme: true,
  MainColor: MUI.colors.orange,
  SecondaryColor: MUI.colors.blue,
  Fonts: [
    'Manrope',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"JoyPixels"',
    '"Noto color Emoji"',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"'
  ],
  CONSTANTS: {
    DRAWER_WIDTH: 240
  }
}

export default ui
