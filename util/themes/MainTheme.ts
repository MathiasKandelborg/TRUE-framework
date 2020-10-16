import * as MUI from '@material-ui/core'
import generateFontFaces from '@util/generateFontFaces'
import { ui } from '@util/settings'

const MyWonderFullFontFaces = generateFontFaces({
  fontFamily: 'Lato',
  fontFaceOptions: [
    { url: 'Lato-Light', weight: '300' },
    { url: 'Lato-Regular', weight: '400' },
    { url: 'Lato-Bold', weight: '500' },
    { url: 'Lato-Black', weight: '700' }
  ]
})

const { DarkTheme, MainColor, SecondaryColor, Fonts } = ui

const fonts = Fonts.join(',')

const MainTheme = MUI.responsiveFontSizes(
  MUI.unstable_createMuiStrictModeTheme({
    unstable_strictMode: true,
    palette: {
      type: (DarkTheme && 'dark') || 'light',
      background:
        (DarkTheme && {
          default: '#202020',

          paper: '#282828'
        }) ||
        {},

      primary: {
        main: MainColor[700],
        light: MainColor[300]
      },

      secondary: {
        main: SecondaryColor.A400
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
          '@font-face': MyWonderFullFontFaces
        }
      },
      MuiTypography: {
        colorPrimary: {
          color: MainColor[500]
        }
      }
    }
  })
)

export default MainTheme
