import ButtonLink from '@components/HoC/Link/ButtonLink'
import * as MUI from '@material-ui/core'
import homePageStyles from '../HomePage.styles'

const { Grid, Typography } = MUI

const SectionWhyUseTrue: React.FC = () => {
  const classes = homePageStyles()

  return (
    <Grid
      className={classes.sectionWhyUseTrue}
      item
      xs={12}
      container
      direction="row"
      component="section">
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
        <Grid container item xs={12} alignContent="center" justify="center">
          <Grid className={classes.vertDiv} container justify="center">
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
    </Grid>
  )
}

export default SectionWhyUseTrue
