import { action } from 'easy-peasy'
import INavigationModel from 'state/NavigationModel'

const navigationStore: INavigationModel = {
  drawerOpen: false,
  langChangeAnchor: null,
  langChangeMenuOpen: false,
  setLangChangeAnchor: action((state, htmlElement) => {
    // eslint-disable-next-line no-param-reassign
    state.langChangeAnchor = htmlElement
  }),
  toggleDrawer: action((state, boolean) => {
    // eslint-disable-next-line no-param-reassign
    state.drawerOpen = boolean
  }),
  toggleLangChangeMenu: action((state, boolean) => {
    // eslint-disable-next-line no-param-reassign
    state.langChangeMenuOpen = boolean
  })
}

export default navigationStore
