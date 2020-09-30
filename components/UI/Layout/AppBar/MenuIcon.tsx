import * as MUI from '@material-ui/core'
import { useStoreActions } from '@util/tsEasyPeasyHooks'
import { Menu } from 'mdi-material-ui'

const MenuIcon: React.FC<{ iconButtonClassName: string }> = (props) => {
  const { iconButtonClassName } = props
  const drawerToggle = useStoreActions((a) => a.toggleDrawer)

  return (
    <MUI.IconButton
      name="Menu Button"
      aria-label="Menu Button"
      className={iconButtonClassName}
      onClick={() => drawerToggle(true)}>
      <Menu color="inherit" aria-label="Open Menu" />
    </MUI.IconButton>
  )
}
export default MenuIcon
