import { MUILink } from '@components/HoC'
import * as MUI from '@material-ui/core'

const PreviewModeAlert: React.FC = () => (
  <>
    <MUI.Typography variant="caption">
      {/* 
      // @ts-expect-error variant is used in MUI link too */}
      <MUI.Button
        variant="contained"
        component={MUILink}
        color="secondary"
        href="/api/exit-preview">
        Preview mode{' '}
        <span role="img" aria-label="rocket">
          🚀
        </span>{' '}
        &mdash; Click here to exit
      </MUI.Button>
    </MUI.Typography>
  </>
)

export default PreviewModeAlert
