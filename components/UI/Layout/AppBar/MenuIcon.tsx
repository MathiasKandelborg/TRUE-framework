import { IconButton } from '@material-ui/core'
import { useStoreActions } from '@util/tsEasyPeasyHooks'
import { Menu } from 'mdi-material-ui'

const MenuIcon: React.FC<{ iconButtonClassName: string }> = (props) => {
  const { iconButtonClassName } = props
  const drawerToggle = useStoreActions((a) => a.toggleDrawer)

  return (
    <IconButton
      className={iconButtonClassName}
      onClick={() => drawerToggle(true)}>
      <Menu color="inherit" aria-label="Open Menu" />
    </IconButton>
  )
}
export default MenuIcon
