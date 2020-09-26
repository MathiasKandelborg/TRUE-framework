import MenuLink from '@components/HoC/Link/MenuLink'
import * as MUI from '@material-ui/core'
import { useStoreActions } from '@util/tsEasyPeasyHooks'
import menuItemStyles from './MenuItem.styles'

interface IMenuItemProps {
  text: string
  route: string
  as: string
}

const MenuItem: React.FC<IMenuItemProps> = (props) => {
  const { text, route, as } = props

  const drawerToggle = useStoreActions((a) => a.toggleDrawer)

  const classes = menuItemStyles()

  return (
    <li>
      <MUI.ListItem
        alignItems="center"
        button
        disableRipple
        onClick={() => drawerToggle(false)}
        component={MenuLink}
        scroll={false}
        href={route}
        as={as}
        className={classes.menuItem}
        activeClassName={classes.menuItemActive}>
        <MUI.ListItemText primary={text} inset />
      </MUI.ListItem>
    </li>
  )
}

export default MenuItem
