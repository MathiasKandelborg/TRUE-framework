import { Action } from 'easy-peasy'

interface INavigationModel {
  drawerOpen: boolean
  langChangeMenuOpen: boolean
  langChangeAnchor: null | HTMLElement
  setLangChangeAnchor: Action<INavigationModel, null | HTMLElement>
  toggleLangChangeMenu: Action<INavigationModel, boolean>
  toggleDrawer: Action<INavigationModel, boolean>
}

export default INavigationModel
