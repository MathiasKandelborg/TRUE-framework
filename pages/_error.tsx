import { PageAnimation } from '@components/UI'
import * as MUI from '@material-ui/core'
import getSanityConfig from '@util/api/calls/getSanityConfig'
import { AnimatePresence } from 'framer-motion'
import { NextPage } from 'next'
import { PageProps } from 'PageProps'

interface IErrorProps extends PageProps {
  statusCode: number | undefined
}

const Error: NextPage<IErrorProps> = (props) => {
  const { statusCode } = props

  return (
    <AnimatePresence>
      <PageAnimation>
        <MUI.Typography>
          {statusCode
            ? `An error occurred on the server: ${statusCode}`
            : `An error occurred on the client`}
        </MUI.Typography>
      </PageAnimation>
    </AnimatePresence>
  )
}

Error.getInitialProps = async (ctx) => {
  const config = await getSanityConfig()
  // console.log(ctx)

  return {
    ...config,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    statusCode: ctx.res?.statusCode
  }
}

export default Error
