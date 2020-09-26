import { PageAnimation } from '@components/UI'
import * as MUI from '@material-ui/core'

interface IErrorProps {
  statusCode: string | undefined
}

const Error: React.FC<IErrorProps> = (props) => {
  const { statusCode } = props

  return (
    <PageAnimation>
      <MUI.Typography>
        {statusCode
          ? `An error occurred on the server: ${statusCode}`
          : `An error occurred on the client`}
      </MUI.Typography>
    </PageAnimation>
  )
}

export default Error
