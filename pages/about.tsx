import MUILink from '@components/HoC/Link/MUILink'
import { PageAnimation } from '@components/UI'
import * as MUI from '@material-ui/core'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { PageProps } from 'PageProps'

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: { ...ctx },

    revalidate: 3600
  }
}

interface IAboutPageProps
  extends PageProps,
    InferGetStaticPropsType<typeof getStaticProps> {}

const AboutPage: React.FunctionComponent<IAboutPageProps> = (props) => {
  const { preview } = props

  if (preview) {
    return <h1>Implement me!</h1>
  }

  return (
    <PageAnimation layoutID="layout">
      <MUI.Typography variant="h1">About</MUI.Typography>
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
