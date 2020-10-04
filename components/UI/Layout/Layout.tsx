import * as MUI from '@material-ui/core'
import FAB from '../FAB/FAB'
import { AppBar } from './AppBar'
import { AppDrawer, DrawerMenu } from './Drawer'
import Footer from './Footer/Footer'
import layoutStyles from './Layout.styles'

interface ILayoutProps {
  MenuItems: JSX.Element
  preview?: boolean
}

const Layout: React.FC<ILayoutProps> = (props) => {
  const { children, MenuItems, preview } = props

  const classes = layoutStyles()

  return (
    <>
      <AppBar
        preview={preview}
        appBarClassName={classes.appBar}
        iconButtonClassName={classes.menuButton}
      />
      <nav>
        <AppDrawer drawerPaperClassName={classes.drawerPaper}>
          <DrawerMenu routes={MenuItems} />
        </AppDrawer>
      </nav>

      <div className={classes.toolbar} />
      <MUI.Container maxWidth="lg" className={classes.content}>
        {/* Wrap page components in a 'Root Grid' (https://material-ui.com/components/Grid/) */}
        <MUI.Grid
          container
          direction="column"
          component="main"
          className={classes.main}>
          <>{children}</>
        </MUI.Grid>
        <div className={classes.mainSpacer} />
        <Footer />
      </MUI.Container>
      <FAB />
    </>
  )
}

export default Layout
