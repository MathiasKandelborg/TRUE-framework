import * as MUI from '@material-ui/core'
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
      <MUI.Typography variant="h2">{heading}</MUI.Typography>
      <MUI.Typography variant="subtitle1">{label}</MUI.Typography>
      {text && (
        <MUI.Typography component="div">
          <SimpleBlockContent blocks={text} />
        </MUI.Typography>
      )}
    </section>
  )
}

export default TextSection
