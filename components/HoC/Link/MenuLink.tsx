/* eslint-disable react/jsx-props-no-spreading, jsx-a11y/anchor-has-content */

import * as MUI from '@material-ui/core'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import * as React from 'react'
import NextComposed, { NextComposedProps } from './NextComposed'

interface ILinkPropsBase {
  activeClassName?: string
  innerRef?: React.Ref<HTMLAnchorElement>
  as: string
}

export type TLinkProps = ILinkPropsBase &
  NextComposedProps &
  Omit<MUI.LinkProps, 'href'>

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
const MenuLink = (props: TLinkProps) => {
  const {
    activeClassName = 'active',
    className: classNameProps,
    innerRef,
    as,
    href,
    ...other
  } = props

  const router = useRouter()

  const className = clsx(classNameProps, {
    [activeClassName]: router.asPath === href && activeClassName
  })

  // console.log(`AFTER\nas: ${customAs}, href: ${customHref}`)

  return (
    <MUI.Link
      component={NextComposed}
      className={className}
      ref={innerRef}
      {...other}
      href={href as string}
      as={as}
    />
  )
}

export default React.forwardRef<HTMLAnchorElement, TLinkProps>((props, ref) => (
  <MenuLink {...props} innerRef={ref} />
))
