import { PageAnimation } from '@components/UI'
import { Typography } from '@material-ui/core'
import { lpar } from '@util/characters'
import { PageProps } from 'PageProps'

const Page404: React.FC<PageProps> = () => {
  return (
    <PageAnimation layoutID="layout">
      <Typography>404 - Page Not Found :{lpar}</Typography>
    </PageAnimation>
  )
}

export default Page404

// eslint-disable-next-line @typescript-eslint/require-await
/**
 *
 */
export const getStaticProps = async () => ({
  props: {}
})
