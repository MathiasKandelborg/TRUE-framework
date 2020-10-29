import PageSEO from '@components/HoC/SEO/Page'
import AboutPage from '@components/UI/Pages/About/AboutPage'
import getSanityConfig from '@util/api/calls/getSanityConfig'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { PageProps } from 'PageProps'

export const getStaticProps: GetStaticProps<PageProps> = async (ctx) => {
  const config = await getSanityConfig()

  return {
    props: { ...ctx, ...config },
    revalidate: 3600
  }
}

const About: React.FunctionComponent<InferGetStaticPropsType<
  typeof getStaticProps
>> = (props) => {
  const { preview, locale } = props

  console.info(`Loading ${locale || ''} strings`)

  if (preview) {
    return <h1>Implement me!</h1>
  }

  return (
    <>
      <PageSEO title="About" description="A description of TRUE" />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <AboutPage {...props} />
    </>
  )
}

About.displayName = 'About Page'

export default About
