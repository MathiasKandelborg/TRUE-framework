import PageSEO from '@components/HoC/SEO/Page'
import HomePage from '@components/UI/Pages/Home/HomePage'
import getSanityConfig from '@util/api/calls/getSanityConfig'
import resolveTranslationFiles from '@util/i18n/resolveTranslationFiles'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { PageProps } from 'PageProps'

export const getStaticProps: GetStaticProps<PageProps> = async (ctx) => {
  const config = await getSanityConfig()

  const error = 'I18n is not enabled in `next.config.js`'

  /**
   * Get translation files based on current locale
   *
   * `translation` is handled like an export default js module
   * To access keys in the file, use object notation
   */
  const translation = resolveTranslationFiles({
    locale: ctx.locale || error,
    locales: ctx.locales || [error],
    namespaces: ['homePage', 'test']
  })

  return {
    props: { ...ctx, ...config, translation },
    revalidate: 3600
  }
}

const Home: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = (
  props
) => (
  <>
    <PageSEO
      title="Home Page"
      description="The homepage for the TRUE framework showcase of itself"
    />
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <HomePage {...props} />
  </>
)

Home.displayName = 'Home Page'

export default Home
