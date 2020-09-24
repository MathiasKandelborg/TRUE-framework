import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab
} from '@material-ui/core'
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
      <Fab
        color="primary"
        aria-label="contact"
        className={classes.fab}
        onClick={() => setModalOpen(true)}>
        <p>X</p>
      </Fab>
      <Dialog
        aria-labelledby="contact-dialog-title"
        aria-describedby="contact-dialog-desc"
        open={modalIsOpen}
        onClose={() => setModalOpen(false)}>
        <DialogTitle id="contact-dialog-title">Contact Options</DialogTitle>
        <DialogContent>
          <DialogContentText id="contact-dialog-desc">
            Contact options
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default FAB
