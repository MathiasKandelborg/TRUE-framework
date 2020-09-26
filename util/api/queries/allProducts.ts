import groq from 'groq'

const allProducts = groq`*[_type == "product"]{
  ...,
  categories[] -> { ... }
}`

export default allProducts
