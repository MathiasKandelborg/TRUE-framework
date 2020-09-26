import * as MUI from '@material-ui/core'

const footerStyles = MUI.makeStyles((theme: MUI.Theme) => {
  return MUI.createStyles({
    footerLinkItem: {
      padding: theme.spacing(1)
    },
    link: { margin: theme.spacing(1), width: '100%' }
  })
})

export default footerStyles
