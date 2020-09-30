import * as MUI from '@material-ui/core'

const menuItemStyles = MUI.makeStyles((theme: MUI.Theme) =>
  MUI.createStyles({
    menuItem: {
      color: 'inherit',
      fontSize: theme.typography.subtitle1.fontSize,
      fontWeight: theme.typography.fontWeightMedium
    },
    menuItemActive: {
      color: theme.palette.primary.light,
      fontWeight: theme.typography.fontWeightBold,
      paddingLeft: theme.spacing(3)
    }
  })
)

export default menuItemStyles
