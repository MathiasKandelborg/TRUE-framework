import { UTILITY } from 'settings/UTILITY'

const common: UTILITY.CommonSettings = {
  title: process.env.NEXT_PUBLIC_PROJECT_TITLE || 'NO TITLE IN `.env`',
  description:
    process.env.NEXT_PUBLIC_PROJECT_DESCRIPTION || 'NO DESCRIPTION IN `.env``',
  language: 'en-US',
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
