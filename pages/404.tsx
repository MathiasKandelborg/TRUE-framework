/** @format */

import { PageAnimation } from '@components/UI'
import { Typography } from '@material-ui/core'
import { lpar } from '@util/characters'
import { AllPagesProps } from 'AllPagesProps'

const Page404: React.FC<AllPagesProps> = () => {
  return (
    <PageAnimation>
      <Typography>404 - Page Not Found :{lpar}</Typography>
    </PageAnimation>
  )
}

export default Page404

// eslint-disable-next-line @typescript-eslint/require-await
export async function getStaticProps() {
  return {
    props: {}
  }
}
