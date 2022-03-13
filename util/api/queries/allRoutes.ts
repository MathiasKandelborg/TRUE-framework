import groq from 'groq'

const routes = (locale?: string): string =>
  locale
    ? groq`
*[_type == "route" && __i18n_lang == "${locale}"]{
  slug,
  __i18n_lang
}
`
    : groq`*[_type == "route"]{
  slug,
  __i18n_lang
}`
export default routes
