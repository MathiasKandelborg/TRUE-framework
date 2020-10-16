import * as MUI from '@material-ui/core'

interface IPageSectionComponentProps {
  id: string
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
}

const PageSection: React.FC<IPageSectionComponentProps> = (props) => {
  const { id, children, direction } = props

  return (
    <MUI.Grid
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
