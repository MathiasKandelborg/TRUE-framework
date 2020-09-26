import { MUILink } from '@components/HoC'
import * as MUI from '@material-ui/core'
import footerStyles from './Footer.styles'

interface IFooterLinkGridItem {
  text: string
  href: string
}

const FooterLinkGridItem: React.FC<IFooterLinkGridItem> = (props) => {
  const { text, href } = props

  const classes = footerStyles()

  return (
    <MUI.Grid
      item
      xs={12}
      sm={4}
      container
      alignContent="center"
      className={classes.footerLinkItem}>
      <MUILink
        variant="subtitle1"
        align="center"
        href={href}
        className={classes.link}>
        {text}
      </MUILink>
    </MUI.Grid>
  )
}

export default FooterLinkGridItem
