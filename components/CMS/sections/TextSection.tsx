/** @format */

import { Typography } from '@material-ui/core'
import SimpleBlockContent from '../PortableText/SimpleBlockContent'

interface ITextSectionProps {
  heading: string
  label: string
  text: [
    {
      style: string
      _type: string
      children: [{ _type: string; text: string }]
      markDefs: [{ _key: string; _type: string; [key: string]: string }]
    }
  ]
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
