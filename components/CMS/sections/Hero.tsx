import * as MUI from '@mui/material'
import { BlockContent } from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import generateRawTextFromTextBlock from '@util/generateRawTextFromTextBlock'
import client from '@util/sanity'
import { TextBlock } from 'PortableText'
import SimpleBlockContent from '../PortableText/SimpleBlockContent'

interface IHeroSectionProps {
  heading: string
  tagline: TextBlock
  ctas: [string]
  backgroundImage: BlockContent['imageOptions']
}

/**
 * @param {SanityImageSource} source The Sanity image source
 * @returns {string} Image url
 */
const urlFor = (source: SanityImageSource) =>
  imageUrlBuilder(client).image(source)

const HeroSection: React.FC<IHeroSectionProps> = (props) => {
  const { heading, tagline, backgroundImage } = props

  const style = backgroundImage
    ? {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        backgroundImage: `url("${urlFor(backgroundImage)
          .width(2000)
          .auto('format')
          .url()!}")`
      }
    : {}

  return (
    <section>
      <MUI.Grid>
        <img
          src={style?.backgroundImage}
          alt={generateRawTextFromTextBlock(Array(tagline))}
        />
        <MUI.Typography variant="h1">{heading}</MUI.Typography>
        {tagline && (
          <MUI.Typography>
            <SimpleBlockContent blocks={tagline} />
          </MUI.Typography>
        )}
      </MUI.Grid>
    </section>
  )
}

export default HeroSection
