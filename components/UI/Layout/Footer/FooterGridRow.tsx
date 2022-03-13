import * as MUI from '@mui/material'

interface IFooterGridRowProps {
  placeholder: string
}

const FooterGridRow: React.FC<IFooterGridRowProps> = (props) => {
  const { children } = props

  return (
    <MUI.Grid
      item
      xs={12}
      sm={6}
      md={4}
      container
      alignContent="center"
      direction="column"
      sx={{ p: 1 }}>
      {children}
    </MUI.Grid>
  )
}

export default FooterGridRow
