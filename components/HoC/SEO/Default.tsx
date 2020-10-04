import { DefaultSeo } from 'next-seo'

interface IDefaultSEOProps {
  canonicalRoute: string
}

/**
 *  [Documentation for next-seo](https://github.com/garmeeh/next-seo)
 *
 * @param {IDefaultSEOProps} props Default SEO props
 * @returns {JSX.Element} The default SEO component
 */
const DefaultSEO: React.FC<IDefaultSEOProps> = (props) => {
  const { canonicalRoute } = props

  return (
    <DefaultSeo
      additionalMetaTags={[
        {
          name: 'viewport',
          content: 'minimum-scale=1, initial-scale=1, width=device-width'
        }
      ]}
      canonical={canonicalRoute}
      titleTemplate="%s | TRUE Framework"
      title="Set my title"
    />
  )
}

export default DefaultSEO
