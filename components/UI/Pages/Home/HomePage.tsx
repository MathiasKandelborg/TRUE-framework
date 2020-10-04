import TitleWithDivider from '@components/HoC/TitleWithDivider'
import { PageAnimation } from '@components/UI'
import * as MUI from '@material-ui/core'
import { PageProps } from 'PageProps'
import homePageStyles from './HomePage.styles'
import SectionBasedOnPracticesIdeas from './Section/BasedOnPracticesIdeas'
import SectionWhyUseTrue from './Section/WhyUseTrue'

type IHomePageProps = PageProps

const { Grid } = MUI

const HomePage: React.FC<IHomePageProps> = (props) => {
  const { config } = props

  const classes = homePageStyles()

  return (
    <>
      <TitleWithDivider variant="h1" text={config.title} />

      <PageAnimation layoutID="page">
        <Grid component={MUI.Paper} className={classes.root}>
          <img
            style={{ borderTopLeftRadius: 4, borderTopRightRadius: 4 }}
            width="100%"
            srcSet="/images/TRUE-logo/TRUE-logo-social-blue.png,
             /images/TRUE-logo/TRUE-logo-social-large-blue 2x"
            src="/images/TRUE-logo/TRUE-logo-social-large-blue.png"
            alt="TRUE Framework Logo Header"
          />
          <br />
          <br />
          <SectionWhyUseTrue />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <SectionBasedOnPracticesIdeas />
          <Grid item xs={12}>
            <img
              src="/images/illustrations/nextjs.svg"
              width="100%"
              height={256}
              alt="Next dot JS Illustration"
            />
          </Grid>
        </Grid>
      </PageAnimation>
    </>
  )
}

export default HomePage
