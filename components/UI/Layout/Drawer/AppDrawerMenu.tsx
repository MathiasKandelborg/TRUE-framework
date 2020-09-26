import * as MUI from '@material-ui/core'
import appDrawerMenuStyles from './AppDrawerMenu.styles'

interface IDrawerMenuProps {
  routes: JSX.Element[]
}

const DrawerMenu: React.FC<IDrawerMenuProps> = (props) => {
  const { routes } = props
  const styles = appDrawerMenuStyles()

  /*  const MenuItemsArr: JSX.Element[] = [] */
  /* 
  routes.map((r, i) => {
    return MenuItemsArr.push(
      <MenuItem
        key={`menu-item-${i.toString()}`}
        text={r.as}
        as={r.as}
        route={r.route}
        routes={routes}
      />
    )
  })
 */
  return (
    <>
      <MUI.Box className={styles.toolbar} />
      <MUI.List>{routes}</MUI.List>
    </>
  )
}

export default DrawerMenu
