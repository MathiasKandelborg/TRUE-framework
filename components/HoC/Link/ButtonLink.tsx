import * as MUI from '@material-ui/core'
import ifPathnameIsIndex from '@util/ifPathnameIsIndex'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import * as React from 'react'
import NextComposed, { NextComposedProps } from './NextComposed'

interface ILinkPropsBase {
  activeClassName?: string
  innerRef?: React.Ref<HTMLAnchorElement>
}

export type LinkProps = ILinkPropsBase &
  NextComposedProps &
  Omit<MUI.LinkProps, 'href' | 'variant'>

const ButtonLink = (props: LinkProps) => {
  const {
    href,
    activeClassName = 'active',
    className: classNameProps,
    innerRef,
    ...other
  } = props

  const router = useRouter()
  const pathname = ifPathnameIsIndex(
    typeof href === 'string' ? href : href.pathname
  )

  const className = clsx(classNameProps, {
    [activeClassName]: router.pathname === pathname && activeClassName
  })

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <NextComposed className={className} ref={innerRef} href={href} {...other} />
  )
}

export default React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <ButtonLink {...props} innerRef={ref} />
))
