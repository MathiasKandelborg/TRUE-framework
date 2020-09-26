import groq from 'groq'

const productsByCategory = groq`*[_type == "product" && references($id)]{
  ...,
  categories[] -> { ..., url { current } }
}`

export default productsByCategory
