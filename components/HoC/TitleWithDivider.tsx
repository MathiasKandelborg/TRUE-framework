import TitleAnimation from '@components/UI/Animation/TitleAnimation'
import * as MUI from '@material-ui/core'

interface ITitleDividerProps extends MUI.TypographyProps {
  text: string
}

const TitleWithDivider: React.FC<ITitleDividerProps> = (props) => {
  const { text, variant, gutterBottom } = props

  return (
    <MUI.Grid item xs={12}>
      <TitleAnimation>
        <MUI.Typography
          color="primary"
          variant={variant}
          gutterBottom={gutterBottom}>
          {text}
        </MUI.Typography>
      </TitleAnimation>
      <MUI.Divider /*  variant="middle" */ light />
      <br />
    </MUI.Grid>
  )
}

export default TitleWithDivider
