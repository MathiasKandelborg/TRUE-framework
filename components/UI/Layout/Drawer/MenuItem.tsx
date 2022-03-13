import { MUILink } from '@components/HoC'
import * as MUI from '@mui/material'
import { useStoreActions } from '@util/tsEasyPeasyHooks'
import { useRouter } from 'next/router'

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
      <MUILink underline="none" href={route} as={as}>
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
            }
          }}>
          <MUI.ListItemText primary={text} inset />
        </MUI.ListItemButton>
      </MUILink>
    </li>
  )
}

export default MenuItem
