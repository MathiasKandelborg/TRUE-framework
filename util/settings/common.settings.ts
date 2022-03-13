import { UTILITY } from 'settings/UTILITY'

const common: UTILITY.CommonSettings = {
  language: 'en',
  availableLangs: [
    { language: 'Dansk', code: 'da' },
    { language: 'English', code: 'en' }
  ],
  staticRoutes: [
    {
      en: {
        name: 'Home',
        route: '/',
        as: '/',
        follow: true,
        index: true
      },
      da: {
        name: 'Forside',
        route: '/',
        as: '/',
        follow: true,
        index: true
      }
    },
    {
      en: {
        name: 'About',
        route: '/about',
        as: '/about',
        follow: true,
        index: true
      },
      da: {
        name: 'Om TRUE',
        route: '/om-true',
        as: '/om-true',
        follow: true,
        index: true
      }
    },
    {
      en: {
        name: 'Categories',
        route: '/categories',
        as: '/categories',
        follow: true,
        index: true
      },
      da: {
        name: 'Kategorier',
        route: '/kategorier',
        as: '/kategorier',
        follow: true,
        index: true
      }
    }
  ]
}

export default common
