import TitleAnimation from '@components/UI/Animation/TitleAnimation'
import * as MUI from '@material-ui/core'

interface ITitleDividerProps extends MUI.TypographyProps {
  text: string
}

const TitleWithDivider: React.FC<ITitleDividerProps> = (props) => {
  const { text, color, ...rest } = props

  return (
    <MUI.Grid item xs={12}>
      <TitleAnimation>
        <MUI.Typography
          color={color || 'primary'}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...rest}>
          {text}
        </MUI.Typography>
      </TitleAnimation>
      <MUI.Divider /*  variant="middle" */ light />
      <br />
    </MUI.Grid>
  )
}

export default TitleWithDivider
