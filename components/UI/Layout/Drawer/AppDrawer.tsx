/** @format */

import { Drawer, Hidden, SwipeableDrawer } from '@material-ui/core'
import iOS from '@util/isIOS'
import { useStoreActions, useStoreState } from '@util/tsEasyPeasyHooks'
import React from 'react'

interface IDrawerProps {
  children: React.ReactChild
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
      <Hidden mdUp implementation="js">
        <SwipeableDrawer
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
        </SwipeableDrawer>
      </Hidden>
      <Hidden smDown implementation="js">
        <Drawer
          variant="permanent"
          open
          classes={{
            paper: drawerPaperClassName
          }}>
          {children}
        </Drawer>
      </Hidden>
    </>
  )
}

export default AppDrawer
