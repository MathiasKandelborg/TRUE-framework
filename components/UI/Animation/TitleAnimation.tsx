import { titleVariants } from '@util/animations/variants'
import { motion } from 'framer-motion'

/**
 * Animates the page entering and on un-mount leaving again
 *
 * @param {object} options The options object
 * @param {JSX.Element|JSX.Element[]} options.children React children
 * @returns {JSX.Element} Title animation div
 */
const TitleAnimation: React.FC = ({ children }) => (
  <motion.div
    variants={titleVariants}
    initial="exit"
    animate="enter"
    exit="exit"
    layout>
    {children}
  </motion.div>
)

export default TitleAnimation
