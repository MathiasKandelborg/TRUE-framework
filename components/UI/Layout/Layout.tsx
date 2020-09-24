import * as MUI from '@material-ui/core'
import FAB from '../FAB/FAB'
import { AppBar } from './AppBar'
import { AppDrawer, DrawerMenu } from './Drawer'
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

      <div className={classes.toolbar} />
      <MUI.Container maxWidth="md" className={classes.content} component="main">
        {/* Wrap page components in a 'Root MUI.Grid' (https://material-ui.com/components/MUI.Grid/) */}
        <MUI.Grid container>
          <>{children}</>
        </MUI.Grid>
      </MUI.Container>
      <FAB />
    </>
  )
}

export default Layout
