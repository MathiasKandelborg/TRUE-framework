import { Action } from 'easy-peasy'

interface INavigationModel {
  drawerOpen: boolean
  toggleDrawer: Action<INavigationModel, boolean>
}

export default INavigationModel
