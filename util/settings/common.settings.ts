import { UTILITY } from 'settings/UTILITY'

import { UTILITY } from 'UTILITY'

const common: UTILITY.CommonSettings = {
  staticRoutes: [
    {
      route: '/',
      as: 'Home'
    },
    {
      route: '/about',
      as: 'About'
    }
  ]
}

export default common
