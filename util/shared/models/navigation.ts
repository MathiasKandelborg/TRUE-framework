import { action } from 'easy-peasy'
import INavigationModel from 'state/NavigationModel'

const navigationStore: INavigationModel = {
  drawerOpen: false,
  toggleDrawer: action((state, boolean) => {
    // eslint-disable-next-line no-param-reassign
    state.drawerOpen = boolean
  })
}

export default navigationStore
