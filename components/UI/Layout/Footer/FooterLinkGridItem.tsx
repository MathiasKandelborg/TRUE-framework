import { MUILink } from '@components/HoC'
import footerStyles from './Footer.styles'

interface IFooterLinkGridItem {
  text: string
  href: string
}

const FooterLinkGridItem: React.FC<IFooterLinkGridItem> = (props) => {
  const { text, href } = props

  const classes = footerStyles()

  return (
    <MUILink
      variant="subtitle1"
      align="center"
      href={href}
      className={classes.link}>
      {text}
    </MUILink>
  )
}

export default FooterLinkGridItem
