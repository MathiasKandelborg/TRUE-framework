import { TextBlock } from 'PortableText'

/**
 * Takes a Portable Text TextBlock array and generates a raw string
 * Nice for usage with meta tags or other places that don't need styled text.
 *
 * @param {TextBlock[]} textBlock Portable Text array
 * @returns {string} [The text reference](https://github.com/portabletext/portabletext)
 */
function generateRawTextFromTextBlock(textBlock: TextBlock[]): string {
  let rawText = ''
  /* Create raw-text description from description text blocks */
  textBlock?.forEach((textChild) =>
    textChild.children.map(
      // eslint-disable-next-line no-return-assign,no-param-reassign
      (textObj) => (rawText = `${rawText}${textObj.text}`)
    )
  )

  return rawText
}

export default generateRawTextFromTextBlock
