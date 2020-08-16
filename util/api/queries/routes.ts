/** @format */

import groq from 'groq'

const routes = groq`
*[_type == "route"]{
  slug
}
`
export default routes
