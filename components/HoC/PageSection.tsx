import * as MUI from '@mui/material'

interface IPageSectionComponentProps {
  id: string
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  mb: 2 | 4
}

const PageSection: React.FC<IPageSectionComponentProps> = (props) => {
  const { id, children, direction, mb } = props

  return (
    <MUI.Grid
      sx={{ mb }}
      container
      direction={direction}
      item
      xs={12}
      component="section"
      id={id}>
      <>{children}</>
    </MUI.Grid>
  )
}

export default PageSection
