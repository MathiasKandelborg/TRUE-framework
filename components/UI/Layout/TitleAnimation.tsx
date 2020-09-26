import { titleVariants } from '@util/animations/variants'
import { AnimatePresence, motion } from 'framer-motion'

/**
 * Animates the page entering and on un-mount leaving again
 *
 * @param {object} options The options object
 * @param {JSX.Element|JSX.Element[]} options.children React children
 * @returns {JSX.Element} Title animation div
 */
const TitleAnimation: React.FC = ({ children }) => {
  return (
    <AnimatePresence exitBeforeEnter presenceAffectsLayout>
      <motion.div
        layoutId="page-title"
        variants={titleVariants}
        initial="exit"
        animate="enter"
        exit="exit"
        layout>
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default TitleAnimation
