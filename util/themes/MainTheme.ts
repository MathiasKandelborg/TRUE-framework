import * as MUI from '@material-ui/core'
import { ui } from '@util/settings'

const MyWonderFullFont: {
  fontFamily: string
  fontDisplay: 'swap'
  src: string
} = {
  fontFamily: 'Manrope',
  fontDisplay: 'swap',
  src: `
    local(Manrope),
    url(/Manrope.ttf)`
}

const { DarkTheme, MainColor, SecondaryColor, Fonts } = ui

const fonts = Fonts.join(',')

const MainTheme = MUI.responsiveFontSizes(
  MUI.unstable_createMuiStrictModeTheme({
    palette: {
      type: (DarkTheme && 'dark') || 'light',

      primary: {
        main: MainColor[700],
        light: MainColor[300]
      },

      secondary: {
        main: SecondaryColor.A200
      }
      /*       tonalOffset: 0.4 */
    },
    typography: {
      htmlFontSize: 14,
      fontFamily: fonts
    },

    overrides: {
      MuiCssBaseline: {
        '@global': {
          '@font-face': [MyWonderFullFont]
        }
      }
    }
  })
)

export default MainTheme
