import { UTILITY } from 'settings/UTILITY'

const common: UTILITY.CommonSettings = {
  language: 'en-US',
  staticRoutes: [
    {
      name: 'Home',
      route: '/',
      as: '/',
      follow: true,
      index: true
    },
    {
      name: 'About',
      route: '/about',
      as: '/about',
      follow: true,
      index: true
    },
    {
      name: 'Categories',
      route: '/categories',
      as: '/categories',
      follow: true,
      index: true
    }
  ]
}

export default common
