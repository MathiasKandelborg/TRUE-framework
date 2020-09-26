import MUILink from '@components/HoC/Link/MUILink'
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
    <PageAnimation layoutID="page">
      <MUI.Typography variant="h1">Hello World {config.title}</MUI.Typography>
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
