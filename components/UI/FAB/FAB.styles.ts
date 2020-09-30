import * as MUI from '@material-ui/core'

const makeFABStyles = MUI.makeStyles((theme: MUI.Theme) =>
  MUI.createStyles({
    fab: {
      right: theme.spacing(2),
      bottom: theme.spacing(2),
      position: 'fixed'
    }
  })
)

export default makeFABStyles
