import { Grid, Typography } from '@material-ui/core'
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
 * @param source
 */
const urlFor = (source: SanityImageSource) =>
  imageUrlBuilder(client).image(source)

const HeroSection: React.FC<IHeroSectionProps> = (props) => {
  const { heading, tagline, backgroundImage } = props

  const style = backgroundImage
    ? {
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
      <Grid>
        <Typography variant="h1">{heading}</Typography>
        {tagline && (
          <Typography>
            <SimpleBlockContent blocks={tagline} />
          </Typography>
        )}
      </Grid>
    </section>
  )
}

export default HeroSection
