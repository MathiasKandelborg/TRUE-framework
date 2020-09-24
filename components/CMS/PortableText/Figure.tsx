import imageUrlBuilder from '@sanity/image-url'
import client from '@util/sanity'

interface IFigureProps {
  node: {
    alt: string
    caption: string
    asset: {
      _ref: string
    }
  }
}

const builder = imageUrlBuilder(client)
const Figure: React.FC<IFigureProps> = (props) => {
  const {
    node: { alt, caption, asset }
  } = props

  return (
    <figure>
      <img
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        src={builder.image(asset).auto('format').width(200).url()!}
        alt={alt}
      />
      {caption && (
        <figcaption>
          <div>
            <p>{caption}</p>
          </div>
        </figcaption>
      )}
    </figure>
  )
}

export default Figure
