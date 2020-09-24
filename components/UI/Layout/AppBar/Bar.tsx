

import PreviewModeAlert from '@components/UI/PreviewModeAlert'
import { AppBar as Bar, Toolbar } from '@material-ui/core'
import AppHeader from './Header'
import MenuIconSvg from './MenuIcon'

interface IAppBarProps {
  appBarClassName: string
  iconButtonClassName: string
  preview: boolean
}

const AppBar: React.FC<IAppBarProps> = (props) => {
  const { preview, appBarClassName, iconButtonClassName } = props

  return (
    <Bar className={appBarClassName} position="fixed">
      <Toolbar>
        <MenuIconSvg iconButtonClassName={iconButtonClassName} />
        <div style={{ flexGrow: 1 }} />
        {preview ? <PreviewModeAlert /> : <AppHeader />}
        <div style={{ flexGrow: 1 }} />
      </Toolbar>
    </Bar>
  )
}

export default AppBar
