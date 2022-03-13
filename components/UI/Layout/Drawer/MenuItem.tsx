import MenuLink from '@components/HoC/Link/MenuLink'
import { useRouter } from 'next/router'
import * as MUI from '@mui/material'
import { useStoreActions } from '@util/tsEasyPeasyHooks'
import Link from 'next/link'

interface IMenuItemProps {
  text: string
  route: string
  as: string
}

const MenuItem: React.FC<IMenuItemProps> = (props) => {
  const { text, route, as } = props

  const drawerToggle = useStoreActions((a) => a.toggleDrawer)
  const router = useRouter()

  return (
    <li>
      <Link passHref href={route} as={as}>
        <MUI.Link>
          <MUI.ListItemButton
            alignItems="center"
            onClick={() => drawerToggle(false)}
            selected={router.asPath === as}
            //  scroll
            sx={{
              'color': 'inherit',
              'typography': 'subtitle1',
              '&:hover': {
                paddingLeft: 3,
                fontWeight: 'fontWeightBold',
                color: 'palette.primary.light'
              },
              '&:Mui-selected': {
                pl: 3,
                fontWeight: 'fontWeightBold',
                color: 'palette.primary.light'
              }
            }}>
            <MUI.ListItemText primary={text} inset />
          </MUI.ListItemButton>
        </MUI.Link>
      </Link>
    </li>
  )
}

export default MenuItem
