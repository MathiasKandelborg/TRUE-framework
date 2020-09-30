import * as MUI from '@material-ui/core'

const footerStyles = MUI.makeStyles((theme: MUI.Theme) =>
  MUI.createStyles({
    footerLinkItem: {
      padding: theme.spacing(1)
    },
    link: {
      margin: theme.spacing(1),
      width: '100%',
      color: theme.palette.primary.light
    }
  })
)

export default footerStyles
