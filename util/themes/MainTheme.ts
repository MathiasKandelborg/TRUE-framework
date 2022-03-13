import * as MUI from '@mui/material'
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
  MUI.createTheme({
    unstable_strictMode: true,
    palette: {
      mode: (DarkTheme && 'dark') || 'light',
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
      htmlFontSize: 16,
      fontFamily: fonts
    },

    components: {
      MuiCssBaseline: {
        styleOverrides: {
          '@global': {
            '@font-face': MyWonderFullFontFaces
          }
        }
      },
      MuiTypography: {
        defaultProps: {
          //          color: MainColor[500]
        }
      },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            '&.Mui-selected': {
              //  paddingLeft: 5,
              fontWeight: 'fontWeightBold',
              color: 'palette.primary.light'
            }
          }
        }
      }
    }
  })
)

export default MainTheme
