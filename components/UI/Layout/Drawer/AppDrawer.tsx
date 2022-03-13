import * as MUI from '@mui/material'
import iOS from '@util/isIOS'
import { ui } from '@util/settings'
import { useStoreActions, useStoreState } from '@util/tsEasyPeasyHooks'

interface IDrawerProps {
  toggleDrawerClose: () => void
  toggleDrawerOpen: () => void
  drawerOpen: boolean
}
const DefaultDrawer: React.FC = (props) => {
  const { children } = props

  return (
    <MUI.Hidden smDown implementation="js">
      <MUI.Drawer
        variant="permanent"
        open
        sx={{
          'display': { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: ui.CONSTANTS.DRAWER_WIDTH
          }
        }}>
        {children}
      </MUI.Drawer>
    </MUI.Hidden>
  )
}

const MobileDrawer: React.FC<IDrawerProps> = (props) => {
  const { toggleDrawerClose, toggleDrawerOpen, drawerOpen, children } = props

  return (
    <MUI.SwipeableDrawer
      variant="temporary"
      onClose={toggleDrawerClose}
      onOpen={toggleDrawerOpen}
      open={drawerOpen}
      sx={{
        'display': { xs: 'block', sm: 'none' },
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: ui.CONSTANTS.DRAWER_WIDTH
        }
      }}
      ModalProps={{ keepMounted: true }}
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}>
      {children}
    </MUI.SwipeableDrawer>
  )
}

const AppDrawer: React.FC = (props) => {
  const { children } = props
  const drawerOpen = useStoreState((s) => s.drawerOpen)
  const drawerToggled = useStoreActions((a) => a.toggleDrawer)

  const toggleDrawerOpen = () => drawerToggled(true)

  const toggleDrawerClose = () => drawerToggled(false)

  return (
    <>
      <DefaultDrawer>{children}</DefaultDrawer>
      <MobileDrawer
        toggleDrawerClose={toggleDrawerClose}
        toggleDrawerOpen={toggleDrawerOpen}
        drawerOpen={drawerOpen}>
        {children}
      </MobileDrawer>
    </>
  )
}

export default AppDrawer
