import { Container, Grid } from '@material-ui/core'
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
      <Container maxWidth="md" className={classes.content} component="main">
        {/* Wrap page components in a 'Root Grid' (https://material-ui.com/components/grid/) */}
        <Grid container>
          <>{children}</>
        </Grid>
      </Container>
      <FAB />
    </>
  )
}

export default Layout
