import * as MUI from '@material-ui/core'
import iOS from '@util/isIOS'
import { useStoreActions, useStoreState } from '@util/tsEasyPeasyHooks'

interface IDrawerProps {
  toggleDrawerClose: () => void
  toggleDrawerOpen: () => void
  drawerPaperClassName: string
  drawerOpen: boolean
}
const DefaultDrawer: React.FC<Pick<IDrawerProps, 'drawerPaperClassName'>> = (
  props
) => {
  const { drawerPaperClassName, children } = props

  return (
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
  )
}

const MobileDrawer: React.FC<IDrawerProps> = (props) => {
  const {
    toggleDrawerClose,
    toggleDrawerOpen,
    drawerPaperClassName,
    drawerOpen,
    children
  } = props

  return (
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
  )
}

const AppDrawer: React.FC<Pick<IDrawerProps, 'drawerPaperClassName'>> = (
  props
) => {
  const { children, drawerPaperClassName } = props
  const drawerOpen = useStoreState((s) => s.drawerOpen)
  const drawerToggled = useStoreActions((a) => a.toggleDrawer)

  const toggleDrawerOpen = () => drawerToggled(true)

  const toggleDrawerClose = () => drawerToggled(false)

  return (
    <>
      <DefaultDrawer drawerPaperClassName={drawerPaperClassName}>
        {children}
      </DefaultDrawer>
      <MobileDrawer
        drawerPaperClassName={drawerPaperClassName}
        toggleDrawerClose={toggleDrawerClose}
        toggleDrawerOpen={toggleDrawerOpen}
        drawerOpen={drawerOpen}>
        {children}
      </MobileDrawer>
    </>
  )
}

export default AppDrawer
