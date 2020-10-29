import { PageAnimation } from '@components/UI'
import * as MUI from '@material-ui/core'
import { lpar } from '@util/characters'
import { PageProps } from 'PageProps'

const Page404: React.FC<PageProps> = () => (
  <PageAnimation layoutID="layout">
    <MUI.Typography variant="h1" color="primary" gutterBottom align="center">
      404 - Page Not Found :{lpar}
    </MUI.Typography>
    {/* TODO: Make this a Framer animation to showcase and make errors more fun */}
    <MUI.Typography variant="h2" color="secondary" gutterBottom align="center">
      Redirecting in 10 seconds...
    </MUI.Typography>
    <MUI.Button fullWidth size="large">
      Go to front page?
    </MUI.Button>
  </PageAnimation>
)

export default Page404
