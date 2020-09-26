interface IEmbedHTMLProps {
  node: {
    html: string
  }
}

const EmbedHTML: React.FC<IEmbedHTMLProps> = (props) => {
  const {
    node: { html }
  } = props

  if (!html) {
    return <></>
  }

  // eslint-disable-next-line react/no-danger
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

export default EmbedHTML
