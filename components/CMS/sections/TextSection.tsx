import { Typography } from '@material-ui/core'
import { PageContent } from 'APITypes'
import SimpleBlockContent from '../PortableText/SimpleBlockContent'

interface ITextSectionProps extends Omit<PageContent, '_type'> {
  heading: string
  label: string
}

const TextSection: React.FC<ITextSectionProps> = (props) => {
  const { heading, label, text } = props

  return (
    <section>
      <Typography variant="h2">{heading}</Typography>
      <Typography variant="subtitle1">{label}</Typography>
      {text && (
        <Typography component="div">
          <SimpleBlockContent blocks={text} />
        </Typography>
      )}
    </section>
  )
}

export default TextSection
