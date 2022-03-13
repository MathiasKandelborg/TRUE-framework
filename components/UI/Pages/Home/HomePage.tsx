import CustomAnimatePresence from '@components/HoC/Animation/CustomAnimatePresence'
import TitleWithDivider from '@components/HoC/TitleWithDivider'
import { PageAnimation } from '@components/UI'
import * as MUI from '@mui/material'
import { PageProps } from 'PageProps'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { styled } from '@mui/material/styles'
import SectionBasedOnPracticesIdeas from './Section/BasedOnPracticesIdeas'
import SectionBasedOnThisTech from './Section/BasedOnThisTech'
import SectionWhyUseTrue from './Section/WhyUseTrue'

type IHomePageProps = PageProps

const { Grid } = MUI

const HeaderImage = styled(Image)`
  width: 960,
  height: 480,
  borderTopLeftRadius: 4,
  borderTopRightRadius: 4
`

const HomePage: React.FC<IHomePageProps> = (props) => {
  const { config } = props

  const { t } = useTranslation('common')

  return (
    <>
      <CustomAnimatePresence exitFirst layoutShift>
        <TitleWithDivider key="home-title" variant="h1" text={config.title} />

        <PageAnimation key="home-page">
          <Grid component={MUI.Paper} sx={{ p: 2 }}>
            <HeaderImage
              sizes="60vw"
              priority
              quality={100}
              width={960}
              height={480}
              src="/images/TRUE-logo/TRUE-logo-social-large-blue.png"
              alt="TRUE Framework Logo Header"
            />
            <h1>{t('title')}</h1>
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
