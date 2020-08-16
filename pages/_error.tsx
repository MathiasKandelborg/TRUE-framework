/** @format */

import { PageAnimation } from '@components/UI'
import { Typography } from '@material-ui/core'

interface IErrorProps {
  statusCode: string | undefined
}

const Error: React.FC<IErrorProps> = (props) => {
  const { statusCode } = props

  return (
    <PageAnimation>
      <Typography>
        {statusCode
          ? `An error occurred on the server: ${statusCode}`
          : `An error occurred on the client`}
      </Typography>
    </PageAnimation>
  )
}

export default Error
