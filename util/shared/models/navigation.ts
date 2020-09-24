
import { action } from 'easy-peasy'
import NavigationModel from 'state/NavigationModel'

const navigationStore: NavigationModel = {
  drawerOpen: false,
  toggleDrawer: action((state, boolean) => {
    // eslint-disable-next-line no-param-reassign
    state.drawerOpen = boolean
  })
}

export default navigationStore
