import groq from 'groq'

const categoryBySlug = groq`*[_type == "category" && url.current == $slug][0]{
  ...
}`

export default categoryBySlug
