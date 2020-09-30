import TitleWithDivider from '@components/HoC/TitleWithDivider'
import { PageAnimation } from '@components/UI'
import * as MUI from '@material-ui/core'
import { GetStaticProps } from 'next'
import { PageProps } from 'PageProps'

interface IHomePageProps extends PageProps {
  test: string
}

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps: GetStaticProps = async (ctx) => ({
  props: { ...ctx },

  revalidate: 3600
})

const HomePage: React.FC<IHomePageProps> = (props) => {
  const { config } = props

  return (
    <>
      <TitleWithDivider variant="h1" text={config.title} />

      <PageAnimation layoutID="page">
        <MUI.Grid component={MUI.Paper}>
          <MUI.Typography variant="h2">Showcase</MUI.Typography>
        </MUI.Grid>
      </PageAnimation>
    </>
  )
}

HomePage.displayName = 'Home Page'

export default HomePage
