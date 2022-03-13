import TitleWithDivider from '@components/HoC/TitleWithDivider'
import { PageAnimation } from '@components/UI'
import * as MUI from '@mui/material'
import { lpar } from '@util/characters'
import { PageProps } from 'PageProps'

const Page404: React.FC<PageProps> = () => (
  <>
    <TitleWithDivider
      align="center"
      variant="h1"
      text={`
      404 - Page Not Found :${lpar}`}
    />
    {/* TODO: Make this a Framer animation to showcase and make errors more fun */}
    <PageAnimation layoutID="layout">
      <MUI.Typography
        variant="h2"
        color="secondary"
        gutterBottom
        align="center">
        Redirecting in 10 seconds...
      </MUI.Typography>
      <MUI.Button fullWidth size="large">
        Go to front page?
      </MUI.Button>
    </PageAnimation>
  </>
)

export default Page404
