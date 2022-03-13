import { MUILink } from '@components/HoC'
import PageSection from '@components/HoC/PageSection'
import * as MUI from '@mui/material'

const { Grid, Typography } = MUI

const SectionBasedOnThisTech: React.FC = () => (
  <PageSection mb={2} id="Based on this tech">
    <Grid item xs={12}>
      <Typography variant="h2" align="center" paragraph>
        Based on Bleeding-Edge Tech
      </Typography>
      <Typography variant="h4" align="center" paragraph color="textSecondary">
        Ready for Production
      </Typography>
      <Typography variant="h2" color="textSecondary">
        Web Tech
      </Typography>
      <Grid item xs={12}>
        <img
          src="/images/illustrations/nextjs.svg"
          width="100%"
          height={256}
          alt="Next dot JS Illustration"
        />
      </Grid>
      <Typography variant="h3" gutterBottom>
        Next.js:
      </Typography>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={7}>
          <Typography variant="body1" paragraph color="textSecondary">
            Next.js carries most of the front-end part of TRUE.
            <br />
            Without it, one would need to manually setup code transpilation,
            routing, dev friendly error handling, build system, and much more!
            <br />
            <br />
            Being the most flexible, and - arguably - most efficient framework
            for building React applications, Next.js has found a space in many
            companies. To see what&apos;s possible, try looking at{' '}
            <MUILink href="https://nextjs.org/showcase">
              the Next.js showcase page
            </MUILink>
            .
          </Typography>
        </Grid>
      </Grid>
      <MUI.Divider variant="middle" />
      <br />
      <Typography variant="h2" color="textSecondary">
        User Interface
      </Typography>
      <Grid item xs={12}>
        <img
          src="/images/illustrations/design_components.svg"
          width="100%"
          height={256}
          alt="Design Components Illustration"
        />
      </Grid>
      <Typography variant="h3" gutterBottom>
        Material UI:
      </Typography>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={7}>
          <Typography variant="body1" paragraph color="textSecondary">
            The styling solution of choice is Material UI a.k.a MUI.
            <br />
            Without MUI, there&apos;s no theme, no ready-to-use, optimized, and
            tested component library, that has incredible performance and
            supports accessibility with an A+ out of the box.
            <br />
            <br />
            There is truly much to be said about Material-UI, but one thing is
            certain... It is the ultimate DX while providing customizability to
            your hearts content
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="h3" gutterBottom>
        Framer Motion:
      </Typography>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={7}>
          <Typography variant="body1" paragraph color="textSecondary">
            Framer Motion is the new cool kid on the block. It is what powers
            the amazing Framer tool, and is jam-packed with things you never
            knew you wanted, such as extra listeners for your components, and
            production ready gestures!
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  </PageSection>
)

export default SectionBasedOnThisTech
