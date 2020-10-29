import { Router } from 'next/router'
import { CONSTANTS, seo } from './settings'

const canonicalRoute: (router: Router) => string = (router) =>
  CONSTANTS.DEV
    ? `http://localhost:3000${router.asPath}`
    : `${seo.url}${router.asPath}`

export default canonicalRoute
