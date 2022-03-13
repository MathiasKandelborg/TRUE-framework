import * as MUI from '@mui/material'
import { ui } from '@util/settings'
import FAB from '../FAB/FAB'
import { AppBar } from './AppBar'
import { AppDrawer, DrawerMenu } from './Drawer'
import Footer from './Footer/Footer'

interface ILayoutProps {
  MenuItems: JSX.Element
  preview?: boolean
}

const Layout: React.FC<ILayoutProps> = (props) => {
  const { children, MenuItems, preview } = props

  return (
    <>
      <AppBar preview={preview} />

      <MUI.Box
        component="nav"
        sx={{
          width: { sm: ui.CONSTANTS.DRAWER_WIDTH },
          flexShrink: { sm: 0 }
        }}>
        <AppDrawer>
          <DrawerMenu routes={MenuItems} />
        </AppDrawer>
      </MUI.Box>

      <MUI.Toolbar />
      <MUI.Container
        maxWidth="lg"
        sx={{
          overflowX: 'hidden',
          pt: 3,
          pb: 3,
          width: { md: `calc(100% - ${ui.CONSTANTS.DRAWER_WIDTH}px)` }
        }}>
        {/* Wrap page components in a 'Root Grid' (https://material-ui.com/components/Grid/) */}
        <MUI.Grid
          container
          direction="column"
          component="main"
          sx={{ overflow: 'hidden' }}>
          <>{children}</>
        </MUI.Grid>
        <MUI.Box sx={{ height: 20 }} />
        <Footer />
      </MUI.Container>
      <FAB />
    </>
  )
}

export default Layout
