import groq from 'groq'

const allCategories = groq`*[_type == "category"]{
  _createdAt,
  _updateAt,
  title,
  description,
  slug -> {current}
}`

export default allCategories
