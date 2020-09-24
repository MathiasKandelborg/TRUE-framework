import { createStyles, makeStyles, Theme } from '@material-ui/core'

const menuItemStyles = makeStyles((theme: Theme) => {
  return createStyles({
    menuItem: {
      color: 'inherit',
      fontSize: theme.typography.subtitle1.fontSize,
      fontWeight: theme.typography.fontWeightMedium
    },
    menuItemActive: {
      color: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightBold,
      paddingLeft: theme.spacing(3)
    }
  })
})

export default menuItemStyles
