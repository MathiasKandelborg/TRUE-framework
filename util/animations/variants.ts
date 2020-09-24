

import { Variants } from 'framer-motion'
import easing from './easing'

const variants: Variants = {
  exit: {
    /*  x: 100, 
    opacity: 0, */ transition: easing
  },
  enter: {
    /*  x: 0,
    opacity: 1, */
    transition: { ease: easing }
  }
}

export default variants
