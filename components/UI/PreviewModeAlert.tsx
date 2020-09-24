import { MUILink } from '@components/HoC'
import { Button, Typography } from '@material-ui/core'

const PreviewModeAlert: React.FC = () => (
  <>
    <Typography variant="caption">
      <Button
        variant="contained"
        component={MUILink}
        color="secondary"
        href="/api/exit-preview">
        Preview mode{' '}
        <span role="img" aria-label="rocket">
          🚀
        </span>{' '}
        &mdash; Click here to exit
      </Button>
    </Typography>
  </>
)

export default PreviewModeAlert
