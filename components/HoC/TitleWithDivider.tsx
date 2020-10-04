import TitleAnimation from '@components/UI/Animation/TitleAnimation'
import * as MUI from '@material-ui/core'

interface ITitleDividerProps extends MUI.TypographyProps {
  text: string
}

const TitleWithDivider: React.FC<ITitleDividerProps> = (props) => {
  const { text, variant, gutterBottom } = props

  return (
    <TitleAnimation>
      <MUI.Typography variant={variant} gutterBottom={gutterBottom}>
        {text}
      </MUI.Typography>
      <MUI.Grid item xs={12}>
        <MUI.Divider /*  variant="middle" */ light />
        <br />
      </MUI.Grid>
    </TitleAnimation>
  )
}

export default TitleWithDivider