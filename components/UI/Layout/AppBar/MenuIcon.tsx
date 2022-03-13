import * as MUI from '@mui/material'
import { useStoreActions } from '@util/tsEasyPeasyHooks'
import { Menu } from 'mdi-material-ui'

const MenuIcon: React.FC = () => {
  const drawerToggle = useStoreActions((a) => a.toggleDrawer)

  return (
    <MUI.IconButton
      name="Menu Button"
      aria-label="Menu Button"
      sx={{
        mr: 2,
        ml: -1,
        display: { md: 'none' }
      }}
      // className={iconButtonClassName}
      onClick={() => drawerToggle(true)}>
      <Menu color="inherit" aria-label="Open Menu" />
    </MUI.IconButton>
  )
}
export default MenuIcon
