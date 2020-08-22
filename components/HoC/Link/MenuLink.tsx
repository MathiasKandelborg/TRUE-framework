/** @format */
/* eslint-disable react/jsx-props-no-spreading, jsx-a11y/anchor-has-content */

import MuiLink, { LinkProps as MuiLinkProps } from '@material-ui/core/Link'
import { common } from '@util/settings'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import * as React from 'react'
import NextComposed, { NextComposedProps } from './NextComposed'

interface LinkPropsBase {
  activeClassName?: string
  innerRef?: React.Ref<HTMLAnchorElement>
  as: string
}

export type LinkProps = LinkPropsBase &
  NextComposedProps &
  Omit<MuiLinkProps, 'href'>

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
const MenuLink = (props: LinkProps) => {
  const {
    activeClassName = 'active',
    className: classNameProps,
    innerRef,
    as,
    href,
    ...other
  } = props
  let { cHref: customHref, cAs: customAs } = { cHref: '', cAs: '' }
  const router = useRouter()

  const className = clsx(classNameProps, {
    [activeClassName]: router.asPath === href && activeClassName
  })

  // console.log(`BEFORE:\nas: ${as}, href: ${href as string}`)
  common.staticRoutes.map((route) => {
    /* It's late, I'm tired this should be easy.
     * It does work however :D 2:39 AM Aug. 16. */
    customHref = '/[page]'
    customAs = as
    if (href === '/') {
      customAs = '/'
      customHref = '/'

      return
    }
    if (route.as === 'About' && route.as === as) {
      customAs = '/about'
      customHref = '/about'
    }
  })

  // console.log(`AFTER\nas: ${customAs}, href: ${customHref}`)

  return (
    <MuiLink
      component={NextComposed}
      className={className}
      ref={innerRef}
      {...other}
      href={customHref}
      as={customAs}
    />
  )
}

export default React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
  <MenuLink {...props} innerRef={ref} />
))
