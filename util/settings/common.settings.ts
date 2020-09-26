import { UTILITY } from 'settings/UTILITY'

const common: UTILITY.CommonSettings = {
  staticRoutes: [
    {
      name: 'Home',
      route: '/',
      as: '/'
    },
    {
      name: 'About',
      route: '/about',
      as: '/about'
    },
    {
      name: 'Categories',
      route: '/categories',
      as: '/categories'
    }
  ]
}

export default common
