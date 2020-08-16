/** @format */

import { createStyles, makeStyles, Theme } from '@material-ui/core'
import { ui } from '@util/settings'

const layoutStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      overflowX: 'hidden'
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
      minHeight: '100vh',
      maxWidth: '100vw',
      [theme.breakpoints.up('md')]: {
        marginLeft: ui.CONSTANTS.DRAWER_WIDTH
      }
    }
  })
)

export default layoutStyles
