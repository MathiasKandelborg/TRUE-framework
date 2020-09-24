import { createStyles, makeStyles, Theme } from '@material-ui/core'

const makeFABStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      right: theme.spacing(3),
      bottom: theme.spacing(3),
      position: 'fixed'
    }
  })
)

export default makeFABStyles
