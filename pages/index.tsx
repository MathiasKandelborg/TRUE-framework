import PageSEO from '@components/HoC/SEO/Page'
import HomePage from '@components/UI/Pages/Home/HomePage'
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
