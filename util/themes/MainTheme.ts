

import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core/styles'
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

const MainTheme = createMuiTheme({
  palette: {
    type: (DarkTheme && 'dark') || 'light',

    primary: {
      main: MainColor[500]
    },

    secondary: {
      main: SecondaryColor[500]
    },
    tonalOffset: 0.4
  },
  typography: {
    fontFamily: fonts,
    h1: {
      /*    fontSize: '3.2rem' */
    }
  },

  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [MyWonderFullFont]
      }
    }
  }
})

export default MainTheme
