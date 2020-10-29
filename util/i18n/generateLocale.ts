import { Langs, TSupportedLanguages } from 'i18n/Languages'

interface IGenerateLocaleOpts {
  fallbackLocale: TSupportedLanguages
  locale: TSupportedLanguages
  locales: Langs
}

const generateLocale = (options: IGenerateLocaleOpts): string => {
  const {
    locale,
    locales,
    fallbackLocale = TSupportedLanguages['en-US']
  } = options

  let generatedLocale = locale

  // If a 'default' language is in use e.g.: `en`,
  // `generatedLocale` should be converted to a supported language
  // This is done to avoid duplicating files and directories
  if (!generatedLocale[2]) {
    if (generatedLocale[2] !== '-') {
      // This needs further work to accomodate all variations
      // 1. Look for locale where the first two letters match
      // 2. Mutate locale to match locale name
      if (locales) {
        locales.forEach((lang) => {
          // FIXME: We might want to define which locale should be matched by default :)
          if (lang.split('-')[0] === generatedLocale) {
            generatedLocale = lang
          } else if (lang.length > 2 && lang[2] !== '-') {
            // We didn't have any matching 'default' languages
            console.error(
              'Language should match a UTS Locale, see: https://www.unicode.org/reports/tr35/tr35.html'
            )
          }
        })
      }
    }
  }

  /**
   * Switch case to match supported languages with TypeScript
   * Should be made into its own function
   */
  switch (generatedLocale) {
    case TSupportedLanguages['en-US']:
      return generatedLocale
    case TSupportedLanguages['da-DK']:
      return generatedLocale
    default: {
      console.info('Fell through')
      console.error(
        `Did not match locale ${locale}, the type probably needs to be updated`
      )

      return fallbackLocale
    }
  }
}

export default generateLocale
