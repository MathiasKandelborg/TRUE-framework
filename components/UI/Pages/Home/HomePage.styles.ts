import * as MUI from '@material-ui/core'

const homePageStyles = MUI.makeStyles((theme: MUI.Theme) =>
  MUI.createStyles({
    root: {
      padding: theme.spacing(2)
    },
    vertDiv: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      height: 24,
      maxHeight: 24
    },
    headerImg: {
      width: '960px',
      height: '480px',
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4
    },
    sectionLearnMore: {
      marginBottom: theme.spacing(4)
    },
    sectionWhyUseTrue: {
      marginBottom: theme.spacing(4)
    },
    sectionWhatIsTrue: {
      marginBottom: theme.spacing(2)
    },
    sectionBasedOnThisTech: {
      marginBottom: theme.spacing(2)
    },
    sectionBasedOnPractices: {
      marginBottom: theme.spacing(2)
    }
  })
)

export default homePageStyles
