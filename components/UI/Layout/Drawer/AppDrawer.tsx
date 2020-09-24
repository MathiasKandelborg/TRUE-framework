import * as MUI from '@material-ui/core'
import iOS from '@util/isIOS'
import { useStoreActions, useStoreState } from '@util/tsEasyPeasyHooks'
import React from 'react'

interface IDrawerProps {
  drawerPaperClassName: string
}

const AppDrawer: React.FC<IDrawerProps> = (props) => {
  const { children, drawerPaperClassName } = props
  const drawerOpen = useStoreState((s) => s.drawerOpen)
  const drawerToggled = useStoreActions((a) => a.toggleDrawer)

  const toggleDrawerOpen = () => {
    drawerToggled(true)
  }

  const toggleDrawerClose = () => {
    drawerToggled(false)
  }

  return (
    <>
      <MUI.Hidden mdUp implementation="js">
        <MUI.SwipeableDrawer
          variant="temporary"
          onClose={toggleDrawerClose}
          onOpen={toggleDrawerOpen}
          open={drawerOpen}
          classes={{
            paper: drawerPaperClassName
          }}
          ModalProps={{ keepMounted: true }}
          disableBackdropTransition={!iOS}
          disableDiscovery={iOS}>
          {children}
        </MUI.SwipeableDrawer>
      </MUI.Hidden>
      <MUI.Hidden smDown implementation="js">
        <MUI.Drawer
          variant="permanent"
          open
          classes={{
            paper: drawerPaperClassName
          }}>
          {children}
        </MUI.Drawer>
      </MUI.Hidden>
    </>
  )
}

export default AppDrawer
