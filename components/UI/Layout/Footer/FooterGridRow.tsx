import * as MUI from '@material-ui/core'
import footerStyles from './Footer.styles'

interface IFooterGridRowProps {
  placeholder: string
}

const FooterGridRow: React.FC<IFooterGridRowProps> = (props) => {
  const { children } = props

  const classes = footerStyles()

  return (
    <MUI.Grid
      item
      xs={12}
      sm={6}
      md={4}
      container
      alignContent="center"
      direction="column"
      className={classes.footerLinkItem}>
      {children}
    </MUI.Grid>
  )
}

export default FooterGridRow
