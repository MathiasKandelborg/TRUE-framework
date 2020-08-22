/** @format */

import MUILink from '@components/HoC/Link/MUILink'
import { PageAnimation } from '@components/UI'
import { Typography } from '@material-ui/core'
/* import siteConfig from '@util/api/queries/siteConfig'
import resolveRoutes from '@util/resolveRoutes'
import client from '@util/sanity' */
import { AllPagesProps } from 'AllPagesProps'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
/* import { IAppProps } from './_app'
 */
export const getStaticProps: GetStaticProps = async (ctx) => {
  /*  const what = await client
    .fetch(siteConfig)
    .then((config: IAppProps['pageProps']['config']) => {
      if (config) {
        const sanityRoutes: [{ slug: { _type: string; current: string } }] =
          config.mainNavigation

        return {
          config,
          allRoutes: resolveRoutes(sanityRoutes)
        }
      }

      return Error('Could not fetch sanity config. This is REALLY REALLY BAD.')
    })
  console.log(what)
 */
  console.log(`context:: ${JSON.stringify(ctx, null, 2)}`)

  return {
    props: { ...ctx },

    revalidate: 3600
  }
}

interface IAboutPageProps
  extends AllPagesProps,
    InferGetStaticPropsType<typeof getStaticProps> {}

const AboutPage: React.FunctionComponent<IAboutPageProps> = (props) => {
  const { sanityConfig } = props
  console.log(sanityConfig)

  return (
    <PageAnimation layoutID="layout">
      <Typography variant="h1">About</Typography>
      <MUILink color="primary" href="/">
        Home
      </MUILink>
      <MUILink color="primary" href="/[page]" as="/testerr">
        testerr
      </MUILink>
    </PageAnimation>
  )
}

AboutPage.displayName = 'About Page'

export default AboutPage
