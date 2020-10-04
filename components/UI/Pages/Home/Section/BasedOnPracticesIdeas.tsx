import * as MUI from '@material-ui/core'

const { Grid, Typography } = MUI

const SectionBasedOnPracticesIdeas: React.FC = () => (
  <Grid item xs={12} container direction="row" component="section">
    <Grid item xs={12} md={6}>
      <Typography variant="h3" align="center" paragraph>
        Best Practices & Good Ideas
      </Typography>
      <Typography variant="h6" color="textSecondary" align="center" paragraph>
        Built with best practices & specifications in mind, and with
        bleeding-edge technology
      </Typography>
      <ul
        style={{
          /*   listStyle: 'none', */
          listStyleType: "'✅'",
          listStylePosition: 'inside'
        }}>
        <Typography variant="subtitle1" component="li">
          {'  '}
          Use any CMS
        </Typography>
        <Typography variant="subtitle1" component="li">
          {'  '}
          Great UX, DX, UI, and Animations!
        </Typography>
        <Typography variant="subtitle1" component="li">
          {'  '}
          Opinionated
        </Typography>
        <Typography variant="subtitle1" component="li">
          {'  '}
          100% PWA Compliant
        </Typography>
        <Typography variant="subtitle1" component="li">
          {'  '}
          Customizable
        </Typography>
        <Typography variant="subtitle1" component="li">
          {'  '}
          Open Source
        </Typography>
      </ul>
    </Grid>
    <Grid item xs={12} md={6}>
      <img
        src="/images/illustrations/new_ideas.svg"
        width="100%"
        height={256}
        alt="Woman holding lightbulb"
      />
    </Grid>
  </Grid>
)

export default SectionBasedOnPracticesIdeas
