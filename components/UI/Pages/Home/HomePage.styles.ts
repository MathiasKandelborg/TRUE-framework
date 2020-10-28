import * as MUI from '@material-ui/core'

const homePageStyles = MUI.makeStyles((theme: MUI.Theme) =>
  MUI.createStyles({
    root: {
      padding: theme.spacing(2)
    },
    vertDiv: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      height: 24,
      maxHeight: 24
    },
    headerImg: {
      width: '100%',
      height: '100%',
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4
    }
  })
)

export default homePageStyles
