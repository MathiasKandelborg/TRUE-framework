import CustomAnimatePresence from '@components/HoC/Animation/CustomAnimatePresence'
import TitleWithDivider from '@components/HoC/TitleWithDivider'
import { PageAnimation } from '@components/UI'
import * as MUI from '@mui/material'
import { PageProps } from 'PageProps'

type IAboutPageProps = PageProps

const { Grid, Typography } = MUI

const AboutPage: React.FC<IAboutPageProps> = () => (
  <>
    <CustomAnimatePresence layoutShift exitFirst>
      <TitleWithDivider key="about-title" variant="h1" text="About" />
      <PageAnimation key="about-page" layoutID="page">
        <Grid component={MUI.Paper} sx={{ p: 2 }}>
          <Grid item xs={12} container component="section">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/illustrations/questions.svg"
              width="100%"
              height={316}
              alt="Woman holding lightbulb"
            />

            <Typography variant="h4" paragraph>
              Why name it like this
            </Typography>
            <Typography variant="body1" paragraph>
              The reason TRUE has its name, is because it - as you might know -
              is notoriously hard to choose a name for something. I tried coming
              up with something easy to remember, which sounded good,{' '}
              <em>and</em> conveyed what the framework was about.
              <br />
              <br />
              It was no easy task, and as I was re-thinking my life choices and
              considered giving up open sourcing... how could I compete, what
              made my work unique among all the other really exciting
              frameworks? Then it struck me! It&apos;s{' '}
              <em>Yet Another Framework</em>, or as I chose to call it:
              <br />
            </Typography>
          </Grid>
          <Typography variant="h3" align="center" paragraph>
            The <em>Really Unique, Exciting</em> Framework
          </Typography>
        </Grid>
      </PageAnimation>
    </CustomAnimatePresence>
  </>
)

export default AboutPage
