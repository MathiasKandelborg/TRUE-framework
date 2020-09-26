import * as MUI from '@material-ui/core'

const appDrawerMenuStyles = MUI.makeStyles((theme: MUI.Theme) => {
  return MUI.createStyles({
    toolbar: theme.mixins.toolbar
  })
})

export default appDrawerMenuStyles
