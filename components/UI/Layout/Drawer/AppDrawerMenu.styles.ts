import { createStyles, makeStyles, Theme } from '@material-ui/core'

const appDrawerMenuStyles = makeStyles((theme: Theme) => {
  return createStyles({
    toolbar: theme.mixins.toolbar
  })
})

export default appDrawerMenuStyles
