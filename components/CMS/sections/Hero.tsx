import * as MUI from '@material-ui/core'
import { BlockContent } from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import client from '@util/sanity'
import { TextBlock } from 'PortableText'
import SimpleBlockContent from '../PortableText/SimpleBlockContent'

interface IHeroSectionProps {
  heading: string
  tagline: TextBlock
  ctas: [any]
  backgroundImage: BlockContent['imageOptions']
}

/**
 * @param {SanityImageSource} source The Sanity image source
 * @returns {url} Image url
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

  // Helper function to keep TS happy
  // TODO: Remove, it's just for testing integration
  const image =
    style && style.backgroundImage ? style : { backgroundImage: 'nope' }

  console.log(`This is the backgroundImage: ${image.backgroundImage}`)

  return (
    <section>
      <MUI.Grid>
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
