import * as MUI from '@material-ui/core'
import { useState } from 'react'
import makeFABStyles from './FAB.styles'

/* interface IFABProps {
  placeholder: string
} */

const FAB: React.FC = () => {
  const [modalIsOpen, setModalOpen] = useState(false)

  const classes = makeFABStyles()

  return (
    <>
      <MUI.Fab
        color="primary"
        aria-label="contact"
        className={classes.fab}
        onClick={() => setModalOpen(true)}>
        <p>X</p>
      </MUI.Fab>
      <MUI.Dialog
        aria-labelledby="contact-dialog-title"
        aria-describedby="contact-dialog-desc"
        open={modalIsOpen}
        onClose={() => setModalOpen(false)}>
        <MUI.DialogTitle id="contact-dialog-title">
          Contact Options
        </MUI.DialogTitle>
        <MUI.DialogContent>
          <MUI.DialogContentText id="contact-dialog-desc">
            Contact options
          </MUI.DialogContentText>
        </MUI.DialogContent>
      </MUI.Dialog>
    </>
  )
}

export default FAB
