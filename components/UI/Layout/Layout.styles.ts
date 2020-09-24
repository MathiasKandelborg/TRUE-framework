
import { createStyles, makeStyles, Theme } from '@material-ui/core'
import { ui } from '@util/settings'

const layoutStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: '100vw',
      minHeight: '100vh',
      [theme.breakpoints.up('md')]: {
        maxWidth: `calc(100vw - ${ui.CONSTANTS.DRAWER_WIDTH})`
      }
    },
    drawer: {},
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      [theme.breakpoints.up('md')]: {
        marginLeft: ui.CONSTANTS.DRAWER_WIDTH
      }
    },
    menuButton: {
      marginLeft: -theme.spacing(1),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        display: 'none'
      }
    },
    toolbar: { ...theme.mixins.toolbar },
    drawerPaper: {
      width: ui.CONSTANTS.DRAWER_WIDTH
    },
    content: {
      flexGrow: 1,
      height: '100%',
      width: '100%',
      maxWidth: '100%',
      [theme.breakpoints.up('md')]: {
        paddingLeft: `calc(${theme.spacing(3)}px + ${
          ui.CONSTANTS.DRAWER_WIDTH
        }px)`
      }
    }
  })
)

export default layoutStyles
