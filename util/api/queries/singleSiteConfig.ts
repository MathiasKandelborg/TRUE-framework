import groq from 'groq'

const siteConfig = (lang: string): string => groq`
  *[_id match "global-config**" && __i18n_lang == "${lang}"] {
    ...,
    logo {asset->{extension, url}},
    mainNavigation[] -> {
      ...,
      "title": page->title
    },
    footerNavigation[] -> {
      ...,
      "title": page->title
    },
    
  }[0]  
  `

export default siteConfig
