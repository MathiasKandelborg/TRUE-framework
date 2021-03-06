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

const HeaderImage: React.FC<{ imgClassName: string }> = (props) => {
  const { imgClassName } = props

  return (
    <Image
      className={imgClassName}
      sizes="60vw"
      priority
      quality={100}
      width={960}
      height={480}
      src="/images/TRUE-logo/TRUE-logo-social-large-blue.png"
      alt="TRUE Framework Logo Header"
    />
  )
}

const HomePage: React.FC<IHomePageProps> = (props) => {
  const { config, translation } = props

  const classes = homePageStyles()

  return (
    <>
      <CustomAnimatePresence exitFirst layoutShift>
        <TitleWithDivider key="home-title" variant="h1" text={config.title} />

        <PageAnimation key="home-page">
          <Grid component={MUI.Paper} className={classes.root}>
            <HeaderImage imgClassName={classes.headerImg} />
            <h1>{translation![0].title}</h1>
            <SectionWhyUseTrue />
            <SectionBasedOnPracticesIdeas />
            <SectionBasedOnThisTech />
          </Grid>
        </PageAnimation>
      </CustomAnimatePresence>
    </>
  )
}

export default HomePage
