import PreviewModeAlert from '@components/UI/PreviewModeAlert'
import * as MUI from '@mui/material'
import { ui } from '@util/settings'
import AppHeader from './Header'
import MenuIconSvg from './MenuIcon'

interface IAppBarProps {
  preview?: boolean
}

const AppBar: React.FC<IAppBarProps> = (props) => {
  const { preview } = props

  return (
    <MUI.AppBar
      sx={{
        width: { sm: `calc(100% - ${ui.CONSTANTS.DRAWER_WIDTH}px)` },
        ml: { sm: `${ui.CONSTANTS.DRAWER_WIDTH}px` }
      }}
      position="fixed">
      <MUI.Toolbar>
        <MenuIconSvg />
        <div style={{ flexGrow: 1 }} />
        {preview ? <PreviewModeAlert /> : <AppHeader />}
        <div style={{ flexGrow: 1 }} />
      </MUI.Toolbar>
    </MUI.AppBar>
  )
}

export default AppBar
