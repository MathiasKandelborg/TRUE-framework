import * as MUI from '@material-ui/core'
import appDrawerMenuStyles from './AppDrawerMenu.styles'

interface IDrawerMenuProps {
  routes: JSX.Element
}

const DrawerMenu: React.FC<IDrawerMenuProps> = (props) => {
  const { routes } = props
  const styles = appDrawerMenuStyles()

  return (
    <>
      <div className={styles.toolbar} />
      <MUI.List>{routes}</MUI.List>
    </>
  )
}

export default DrawerMenu
