import PreviewModeAlert from '@components/UI/PreviewModeAlert'
import * as MUI from '@material-ui/core'
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
    <MUI.AppBar className={appBarClassName} position="fixed">
      <MUI.Toolbar>
        <MenuIconSvg iconButtonClassName={iconButtonClassName} />
        <div style={{ flexGrow: 1 }} />
        {preview ? <PreviewModeAlert /> : <AppHeader />}
        <div style={{ flexGrow: 1 }} />
      </MUI.Toolbar>
    </MUI.AppBar>
  )
}

export default AppBar
