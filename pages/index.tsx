/** @format */

import MUILink from '@components/HoC/Link/MUILink'
import { PageAnimation } from '@components/UI'
import { Typography } from '@material-ui/core'
import siteConfig from '@util/api/queries/siteConfig'
import resolveRoutes from '@util/resolveRoutes'
import client from '@util/sanity'
import { AllPagesProps } from 'AllPagesProps'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { IAppProps } from './_app'

export const getStaticProps: GetStaticProps = async (ctx) => {
  const what = await client
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

  return {
    props: { ...ctx, ...what },

    revalidate: 1
  }
}

interface IHomePageProps
  extends AllPagesProps,
    InferGetStaticPropsType<typeof getStaticProps> {
  test: string
}

const HomePage: React.FC<IHomePageProps> = (props) => {
  const { config } = props

  return (
    <PageAnimation layoutID="layout">
      <Typography variant="h1">Hello World {config.title}</Typography>
      <MUILink color="primary" href="/about">
        About
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
        <span tabIndex={0} role="img" aria-label="Emoji: thinking face">
          🤔
        </span>
      </MUILink>
    </PageAnimation>
  )
}

HomePage.displayName = 'Home Page'

export default HomePage
