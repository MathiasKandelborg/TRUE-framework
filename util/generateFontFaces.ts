type IFontFaceOptions = Array<{
  display?: 'auto' | 'block' | 'swap'
  weight: string
  url: string
  fontExt?: string
}>

interface IFont {
  fontFamily: string
  fontDisplay: 'auto' | 'block' | 'swap'
  fontWeight: string
  src: string
}

interface IGenerateFontParams {
  fontFaceOptions: IFontFaceOptions
  fontFamily: string
}

/* const MyWonderFullFont: IFont = {
  fontFamily: 'Lato',
  fontDisplay: 'swap',
  src: `
    local(Lato)
`
}
 */
const generateFontFaces = (options: IGenerateFontParams): IFont[] => {
  const { fontFaceOptions, fontFamily } = options

  const fontFace: IFont[] = []

  fontFaceOptions.map((option) =>
    fontFace.push({
      fontFamily,
      fontDisplay: option.display || 'swap',
      fontWeight: option.weight,
      src: `url(/${option.url}.${option.fontExt || 'ttf'})`
    })
  )

  return fontFace
}

export default generateFontFaces
