import groq from 'groq'

const allProducts = groq`*[_type == "product" && __i18n_lang=="$locale"]{
  ...,
  categories[] -> { ... }
}`

export default allProducts
