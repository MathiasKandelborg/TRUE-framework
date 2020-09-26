import groq from 'groq'

const allCategoriesAllProducts = groq`*[_type == "category"]{
  ...,
  products -> { ... }
}`

export default allCategoriesAllProducts
