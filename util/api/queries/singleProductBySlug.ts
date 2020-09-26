import groq from 'groq'

const singleProductFromSlug = groq`
*[_type == "product" && url.current == $slug][0]{
  ...
}
`
export default singleProductFromSlug
