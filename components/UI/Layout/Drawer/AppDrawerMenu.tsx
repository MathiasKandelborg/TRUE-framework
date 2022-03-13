import * as MUI from '@mui/material'

interface IDrawerMenuProps {
  routes: JSX.Element
}

const DrawerMenu: React.FC<IDrawerMenuProps> = (props) => {
  const { routes } = props

  return (
    <>
      <MUI.Toolbar />
      <MUI.List>{routes}</MUI.List>
    </>
  )
}

export default DrawerMenu
