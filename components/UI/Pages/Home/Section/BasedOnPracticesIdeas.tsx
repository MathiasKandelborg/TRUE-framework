import * as MUI from '@mui/material'
import PageSection from '@components/HoC/PageSection'

const { Grid, Typography } = MUI

const SectionBasedOnPracticesIdeas: React.FC = () => (
  <PageSection mb={2} id="Based on best practices and ideas">
    <Grid item xs={12} md={6}>
      <Typography variant="h3" align="center" paragraph>
        Best Practices & Good Ideas
      </Typography>
      <Typography
        variant="subtitle1"
        color="textSecondary"
        align="center"
        paragraph>
        Built with best practices & specifications in mind,
        <br /> and with bleeding-edge technology
      </Typography>
      <ul
        style={{
          listStyleType: "'✅  '",
          listStylePosition: 'outside'
        }}>
        <Typography variant="subtitle1" component="li">
          Not tied to a particular technology
        </Typography>
        <Typography variant="subtitle1" component="li">
          Lots of Nice Defaults
        </Typography>
        <Typography variant="subtitle1" component="li">
          Customizable
        </Typography>
        <Typography variant="subtitle1" component="li">
          Great UX, DX, UI, and Animations!
        </Typography>
        <Typography variant="subtitle1" component="li">
          100% PWA Compliant
        </Typography>
        <Typography variant="subtitle1" component="li">
          Ready for collaboration
        </Typography>
        <Typography variant="subtitle1" component="li">
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
  </PageSection>
)

export default SectionBasedOnPracticesIdeas
