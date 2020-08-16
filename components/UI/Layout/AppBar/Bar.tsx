/** @format */

import { AppBar as Bar, Toolbar } from '@material-ui/core'
import AppHeader from './Header'
import MenuIconSvg from './MenuIcon'

interface IAppBarProps {
  appBarClassName: string
  iconButtonClassName: string
}

const AppBar: React.FC<IAppBarProps> = (props) => {
  const { appBarClassName, iconButtonClassName } = props

  return (
    <Bar className={appBarClassName} position="fixed">
      <Toolbar>
        <MenuIconSvg iconButtonClassName={iconButtonClassName} />
        <AppHeader />
      </Toolbar>
    </Bar>
  )
}

export default AppBar
