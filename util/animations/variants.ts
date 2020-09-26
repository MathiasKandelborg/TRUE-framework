import { Variants } from 'framer-motion'
import easing from './easing'

const pageVariants: Variants = {
  exit: {
    scale: 0.2,
    /*  x: 100, 
    opacity: 0, */ transition: easing
  },
  enter: {
    scale: 1,
    /*  x: 0,
    opacity: 1, */
    transition: { ease: easing }
  }
}

const titleVariants: Variants = {
  exit: {
    x: -250,
    opacity: 0
  },
  enter: {
    x: 0,
    opacity: 1
  }
}

export { pageVariants, titleVariants }
