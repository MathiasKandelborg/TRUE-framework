import { PageAnimation } from '@components/UI'
import * as MUI from '@material-ui/core'
import { lpar } from '@util/characters'
import { PageProps } from 'PageProps'

const Page404: React.FC<PageProps> = () => (
  <PageAnimation layoutID="layout">
    <MUI.Typography>404 - Page Not Found :{lpar}</MUI.Typography>
  </PageAnimation>
)

export default Page404
