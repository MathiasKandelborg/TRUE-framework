
import variants from '@util/animations/variants'
import { motion } from 'framer-motion'

interface IPageAnimation {
  layoutID?: string
}

/**
 * Animates the page entering and on un-mount leaving again
 */
const PageAnimation: React.FC<IPageAnimation> = ({ layoutID, children }) => {
  return (
    <motion.div
      layoutId={layoutID}
      variants={variants}
      initial="exit"
      animate="enter"
      exit="exit"
      layout>
      {children}
    </motion.div>
  )
}

export default PageAnimation
