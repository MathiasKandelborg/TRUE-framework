import * as MUI from '@material-ui/core'
import FAB from '../FAB/FAB'
import { AppBar } from './AppBar'
import { AppDrawer, DrawerMenu } from './Drawer'
import Footer from './Footer/Footer'
import layoutStyles from './Layout.styles'

interface ILayoutProps {
  MenuItems: JSX.Element[]
  preview: boolean
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

      <MUI.Container maxWidth="md" className={classes.content} component="main">
        <div className={classes.toolbar} />
        {/* Wrap page components in a 'Root MUI.Grid' (https://material-ui.com/components/MUI.Grid/) */}
        <MUI.Grid container>
          <>{children}</>
        </MUI.Grid>
        <div className={classes.mainGrid} />
        <Footer />
      </MUI.Container>
      <FAB />
    </>
  )
}

export default Layout
