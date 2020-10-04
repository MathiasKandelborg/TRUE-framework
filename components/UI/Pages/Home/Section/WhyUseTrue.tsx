import * as MUI from '@material-ui/core'

const { Grid, Typography } = MUI

const SectionWhyUseTrue: React.FC = () => (
  <Grid item xs={12} container direction="row" component="section">
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
      </Typography>
    </Grid>
  </Grid>
)

export default SectionWhyUseTrue
