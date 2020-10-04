import { Variants } from 'framer-motion'
import easing from './easing'

const pageVariants: Variants = {
  exit: {
    scale: 0.2,
    /*  x: 100, 
    opacity: 0, */ transition: {
      easings: easing
    }
  },
  enter: {
    scale: 1,
    /*  x: 0,
    opacity: 1, */
    transition: {
      easings: easing
    }
  }
}

const titleVariants: Variants = {
  exit: {
    x: -500,
    opacity: 0,
    /*  transitionDuration: '500ms', */
    transition: {
      easings: easing
    }
  },
  enter: {
    x: 0,
    opacity: 1,
    /*     transitionDuration: '500ms', */
    transition: {
      easings: easing
    }
  }
}

export { pageVariants, titleVariants }
