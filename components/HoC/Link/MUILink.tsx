/* eslint-disable react/jsx-props-no-spreading, jsx-a11y/anchor-has-content */
import * as MUI from '@material-ui/core'
import * as React from 'react'
import NextComposed, { NextComposedProps } from './NextComposed'

interface ILinkPropsBase {
  innerRef?: React.Ref<HTMLAnchorElement>
  as?: string
}

export type TLinkProps = ILinkPropsBase &
  NextComposedProps &
  Omit<MUI.LinkProps, 'variant' | 'href'>

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
const Link = (props: TLinkProps) => {
  const { href, as, className: classNameProps, innerRef, ...other } = props

  return (
    <MUI.Link
      component={NextComposed}
      className={classNameProps}
      ref={innerRef}
      href={href as string}
      as={as}
      {...other}
    />
  )
}

export default React.forwardRef<HTMLAnchorElement, TLinkProps>((props, ref) => (
  <Link {...props} innerRef={ref} />
))
