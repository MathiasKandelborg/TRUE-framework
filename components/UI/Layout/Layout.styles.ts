import * as MUI from '@material-ui/core'
import { ui } from '@util/settings'

const layoutStyles = MUI.makeStyles((theme: MUI.Theme) =>
  MUI.createStyles({
    drawer: {},
    drawerPaper: {
      width: ui.CONSTANTS.DRAWER_WIDTH
    },
    appBar: {
      backgroundColor: theme.palette.background.default,
      zIndex: theme.zIndex.drawer + 1,
      [theme.breakpoints.up('md')]: {
        marginLeft: ui.CONSTANTS.DRAWER_WIDTH
      }
    },
    menuButton: {
      position: 'fixed', // Don't mess with other elements
      marginLeft: -theme.spacing(1),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        display: 'none'
      }
    },
    toolbar: { ...theme.mixins.toolbar },

    mainSpacer: {
      height: 612
    },

    content: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      [theme.breakpoints.up('md')]: {
        paddingLeft: `calc(${theme.spacing(3)}px + ${
          ui.CONSTANTS.DRAWER_WIDTH
        }px)`
      }
    }
  })
)

export default layoutStyles
