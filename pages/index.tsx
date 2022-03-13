import PageSEO from '@components/HoC/SEO/Page'
import HomePage from '@components/UI/Pages/Home/HomePage'
import getSanityConfig from '@util/api/calls/getSanityConfig'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { PageProps } from 'PageProps'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from 'next-i18next.config'

export const getStaticProps: GetStaticProps<PageProps> = async (ctx) => {
  const config = await getSanityConfig(ctx.locale || 'Next i18n not enabled')

  return {
    props: {
      ...ctx,
      ...config,
      ...(await serverSideTranslations(
        ctx.locale || `I18n not enabled`,
        ['common'],
        nextI18NextConfig
      ))
    },
    revalidate: 3600
  }
}

const Home: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = (
  props
) => (
  <>
    <PageSEO title="Home Page" description="Homepage for the TRUE framework" />
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <HomePage {...props} />
  </>
)

Home.displayName = 'Home Page'

export default Home
