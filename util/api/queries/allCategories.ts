import groq from 'groq'

const allCategories = groq`*[_type == "category"]{
  ...
}`

export default allCategories
