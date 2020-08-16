/** @format */

import { Action } from 'easy-peasy'

interface NavigationModel {
  drawerOpen: boolean
  toggleDrawer: Action<NavigationModel, boolean>
}

export default NavigationModel
