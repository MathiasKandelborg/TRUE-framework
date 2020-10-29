import CustomAnimatePresence from '@components/HoC/Animation/CustomAnimatePresence'
import TitleWithDivider from '@components/HoC/TitleWithDivider'
import { PageAnimation } from '@components/UI'
import * as MUI from '@material-ui/core'
import { PageProps } from 'PageProps'
import Image from 'next/image'
import homePageStyles from './HomePage.styles'
import SectionBasedOnPracticesIdeas from './Section/BasedOnPracticesIdeas'
import SectionBasedOnThisTech from './Section/BasedOnThisTech'
import SectionWhyUseTrue from './Section/WhyUseTrue'

type IHomePageProps = PageProps

const { Grid } = MUI

const HomePage: React.FC<IHomePageProps> = (props) => {
  const { config, translation } = props

  const classes = homePageStyles()

  return (
    <>
      <CustomAnimatePresence exitFirst layoutShift>
        <TitleWithDivider key="home-title" variant="h1" text={config.title} />

        <PageAnimation key="home-page">
          <Grid component={MUI.Paper} className={classes.root}>
            <Image
              className={classes.headerImg}
              sizes="30vw"
              width={960}
              height={480}
              // /images/TRUE-logo/TRUE-logo-social-large-blue.png 2x"
              src="/images/TRUE-logo/TRUE-logo-social-large-blue.png"
              alt="TRUE Framework Logo Header"
            />
            <h1>{translation![0].title}</h1>
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
            <SectionBasedOnThisTech />
          </Grid>
        </PageAnimation>
      </CustomAnimatePresence>
    </>
  )
}

export default HomePage
