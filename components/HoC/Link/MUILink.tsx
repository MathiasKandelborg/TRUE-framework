
/* eslint-disable react/jsx-props-no-spreading, jsx-a11y/anchor-has-content */
import MuiLink, { LinkProps as MuiLinkProps } from '@material-ui/core/Link'
import * as React from 'react'
import NextComposed, { NextComposedProps } from './NextComposed'

interface LinkPropsBase {
  innerRef?: React.Ref<HTMLAnchorElement>
  as?: string
}

export type LinkProps = LinkPropsBase &
  NextComposedProps &
  Omit<MuiLinkProps, 'href'>

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
const Link = (props: LinkProps) => {
  const { href, as, className: classNameProps, innerRef, ...other } = props

  return (
    <MuiLink
      component={NextComposed}
      className={classNameProps}
      ref={innerRef}
      href={href as string}
      as={as}
      {...other}
    />
  )
}

export default React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
  <Link {...props} innerRef={ref} />
))
