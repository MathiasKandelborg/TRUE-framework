import { ILocalizedAppRoute } from 'settings/AppRoute'
import MenuItem from './MenuItem'

interface IListMenuItemsProps {
  allRoutes?: ILocalizedAppRoute[]
}

const ListMenuItems: React.FC<IListMenuItemsProps> = (props) => {
  const { allRoutes } = props

  const MenuItems = allRoutes?.map((r, i) => (
    <MenuItem
      key={`menu-item-${i.toString()}`}
      text={r.name}
      as={r.as}
      route={r.route}
    />
  ))

  return <>{MenuItems}</>
}

export default ListMenuItems
