/** @format */

import MenuLink from '@components/HoC/Link/MenuLink'
import { ListItem, ListItemText } from '@material-ui/core'
import { useStoreActions } from '@util/tsEasyPeasyHooks'
import menuItemStyles from './MenuItem.styles'

interface IMenuItemProps {
  text: string
  route: string
  as: string
  routes: { route: string; as: string }[]
}

const MenuItem: React.FC<IMenuItemProps> = (props) => {
  const { text, route, routes, as } = props

  const drawerToggle = useStoreActions((a) => a.toggleDrawer)

  const classes = menuItemStyles()

  return (
    <li>
      <ListItem
        alignItems="center"
        button
        disableRipple
        onClick={() => drawerToggle(false)}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        component={MenuLink}
        scroll={false}
        /* shallow */
        routes={routes}
        href={route}
        as={as}
        className={classes.menuItem}
        activeClassName={classes.menuItemActive}>
        <ListItemText primary={text} inset />
      </ListItem>
    </li>
  )
}

export default MenuItem
