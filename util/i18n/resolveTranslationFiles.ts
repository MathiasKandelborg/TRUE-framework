import { readdirSync, readFileSync } from 'fs'
import { Langs, TSupportedLanguages } from 'i18n/Languages'
import generateLocale from './generateLocale'

export interface IResolveTranslationFilesOpts {
  locale: TSupportedLanguages
  locales: Langs
  namespaces: string[]
  fallbackLocale?: TSupportedLanguages
  dir?: string
}

type TImportDefault = { title: string } // TEMP TYPE FOR EASE OF USE

/**
 * Does all your neigbourhood translation file loading.
 * FIXME: Make a proper explanation 🤷
 *
 * @param {IResolveTranslationFilesOpts} options Options object
 * @param {TSupportedLanguages} options.locale The current language
 * @param {Array<string>} options.locales All supported languages
 * @param {Array<string>} options.namespaces Which namespaces i.e. files to load
 * @param {TSupportedLanguages} options.fallbackLocale Defaults to `options.locale` - NEEDS to match TSupportedLanguages
 * @returns {TImportDefault} Files as defined in namespaces
 */
const resolveTranslationFiles = (
  options: IResolveTranslationFilesOpts
): TImportDefault[] => {
  const {
    locale,
    locales,
    namespaces,
    dir = `${process.cwd()}/public/i18n`,
    fallbackLocale = locale
  } = options

  const availableLangs = readdirSync(dir)
  const curNamespaceFiles: string[] = []

  const realLocale = generateLocale({ locale, locales, fallbackLocale })

  // If a directory matches given locale: load all files in that directory
  if (availableLangs.find((langDir) => langDir === realLocale)) {
    readdirSync(`${dir}/${realLocale}`, {
      withFileTypes: true
    }).forEach((namespaceFile) => curNamespaceFiles.push(namespaceFile.name))
  } else {
    console.error(
      `error - could not locate translation directory for: ${realLocale}`
    )
  }

  const loadedFiles: TImportDefault[] = []

  curNamespaceFiles.forEach((namespaceFile) => {
    namespaces.forEach((ns) => {
      if (ns === namespaceFile.split('.')[0])
        loadedFiles.push(
          JSON.parse(
            readFileSync(`${dir}/${realLocale}/${namespaceFile}`, 'utf-8')
          )
        )
    })
  })

  return loadedFiles
}

export default resolveTranslationFiles
