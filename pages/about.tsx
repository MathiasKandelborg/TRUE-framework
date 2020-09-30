import TitleWithDivider from '@components/HoC/TitleWithDivider'
import { PageAnimation } from '@components/UI'
import * as MUI from '@material-ui/core'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { PageProps } from 'PageProps'

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps: GetStaticProps = async (ctx) => ({
  props: { ...ctx },

  revalidate: 3600
})

interface IAboutPageProps
  extends PageProps,
    InferGetStaticPropsType<typeof getStaticProps> {}

const AboutPage: React.FunctionComponent<IAboutPageProps> = (props) => {
  const { preview } = props

  if (preview) {
    return <h1>Implement me!</h1>
  }

  return (
    <>
      <TitleWithDivider variant="h1" text="About" />

      <PageAnimation layoutID="page">
        <MUI.Grid component={MUI.Paper}>
          <MUI.Typography>Placeholder</MUI.Typography>
        </MUI.Grid>
      </PageAnimation>
    </>
  )
}

AboutPage.displayName = 'About Page'

export default AboutPage
