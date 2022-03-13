import PreviewModeAlert from '@components/UI/PreviewModeAlert'
import * as MUI from '@mui/material'
import { ui } from '@util/settings'
import AppHeader from './Header'
import LangChanger from './LangChanger'
import MenuIconSvg from './MenuIcon'

interface IAppBarProps {
  preview?: boolean
}

const AppBar: React.FC<IAppBarProps> = (props) => {
  const { preview } = props

  return (
    <MUI.AppBar
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        ml: { sm: `${ui.CONSTANTS.DRAWER_WIDTH}px` }
      }}
      position="fixed">
      <MUI.Toolbar>
        <MenuIconSvg />
        <div style={{ flexGrow: 1 }} />
        {preview ? <PreviewModeAlert /> : <AppHeader />}
        <div style={{ flexGrow: 1 }} />
        <LangChanger />
      </MUI.Toolbar>
    </MUI.AppBar>
  )
}

export default AppBar
