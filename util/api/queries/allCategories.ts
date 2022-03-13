import groq from 'groq'

const allCategories = (locale?: string): string =>
  !locale
    ? groq`*[_type == "category"]{
  ...
}`
    : `*[_type == "category" && __i18n_lang == "${locale}"]`

export default allCategories
