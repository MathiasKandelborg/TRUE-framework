import { pageVariants } from '@util/animations/variants'
import { AnimatePresence, motion } from 'framer-motion'

interface IPageAnimation {
  layoutID?: string
}

/**
 * Animates the page entering and on un-mount leaving again
 *
 * @param {object} options The options object
 * @param {string} options.layoutID The unique id
 * @param {JSX.Element|JSX.Element[]} options.children React children
 * @returns {JSX.Element} Page animation div
 */
const PageAnimation: React.FC<IPageAnimation> = ({ layoutID, children }) => {
  return (
    <AnimatePresence exitBeforeEnter presenceAffectsLayout>
      <motion.div
        layoutId={layoutID}
        variants={pageVariants}
        initial="exit"
        animate="enter"
        exit="exit"
        layout>
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default PageAnimation
