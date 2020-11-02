import handleExitComplete from '@util/handleExitComplete'
import { AnimatePresence } from 'framer-motion'

interface ICustomAnimatePresenceProps {
  layoutShift: boolean
  exitFirst?: boolean
}

const CustomAnimatePresence: React.FC<ICustomAnimatePresenceProps> = (
  props
) => {
  const { layoutShift, exitFirst, children } = props

  return (
    <>
      <AnimatePresence
        exitBeforeEnter={exitFirst}
        onExitComplete={() => handleExitComplete()}
        presenceAffectsLayout={layoutShift}>
        {children}
      </AnimatePresence>
    </>
  )
}

export default CustomAnimatePresence
