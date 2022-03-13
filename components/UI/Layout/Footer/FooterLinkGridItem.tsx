import { MUILink } from '@components/HoC'

interface IFooterLinkGridItem {
  text: string
  href: string
}

const FooterLinkGridItem: React.FC<IFooterLinkGridItem> = (props) => {
  const { text, href } = props

  return (
    <MUILink
      variant="subtitle1"
      underline="hover"
      align="center"
      href={href}
      sx={{
        m: 1,
        width: '100%',
        color: 'palette.primary.light'
      }}>
      {text}
    </MUILink>
  )
}

export default FooterLinkGridItem
