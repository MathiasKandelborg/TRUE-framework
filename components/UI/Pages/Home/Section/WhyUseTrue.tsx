import ButtonLink from '@components/HoC/Link/ButtonLink'
import PageSection from '@components/HoC/PageSection'
import * as MUI from '@mui/material'

const { Grid, Typography } = MUI

const SectionWhyUseTrue: React.FC = () => (
  <PageSection mb={4} id="Why use TRUE">
    <Grid
      item
      xs={12}
      md={6}
      component="img"
      src="/images/illustrations/hacker_mindset.svg"
      width="100%"
      height={256}
      alt="Man looking at block of code"
    />
    <Grid item xs={12} md={6}>
      <Typography variant="h3" align="center" paragraph>
        Why use TRUE
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        There are good reasons to choose this framework for your next project.
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        Continue down the page to explore the
        <br />
        thoughts and goals behind the TRUE framework.
        <br />
        <br />
        <em>You can also get right into it:</em>
      </Typography>
      <Grid
        container
        item
        xs={12}
        alignContent="center"
        justifyContent="center">
        <Grid
          sx={{
            mt: 1,
            mb: 1,
            height: '24px',
            maxHeight: '24px'
          }}
          container
          justifyContent="center">
          <MUI.Divider orientation="vertical" light />
        </Grid>
        <MUI.Button
          variant="contained"
          size="large"
          color="secondary"
          href="https://github.com/MathiasKandelborg/true-framework#readme"
          target="_blank"
          rel="noopener noreferrer"
          component={ButtonLink}>
          Get Started
        </MUI.Button>
      </Grid>
    </Grid>
  </PageSection>
)

export default SectionWhyUseTrue
