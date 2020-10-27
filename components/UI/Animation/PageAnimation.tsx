import { pageVariants } from '@util/animations/variants'
import { motion } from 'framer-motion'

interface IPageAnimation {
  layoutID?: string
}

const PageAnimation: React.FC<IPageAnimation> = ({ children }) => (
  <motion.div
    // layoutId={layoutID}
    variants={pageVariants}
    initial="exit"
    animate="enter"
    exit="exit"
    layout>
    {children}
  </motion.div>
)

export default PageAnimation
