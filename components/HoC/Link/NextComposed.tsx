import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import React from 'react'

export type NextComposedProps = NextLinkProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>

const NextComposed = React.forwardRef<HTMLAnchorElement, NextComposedProps>(
  (props, ref) => {
    const {
      as,
      href,
      replace,
      scroll,
      passHref,
      shallow,
      prefetch,
      ...other
    } = props

    return (
      <NextLink
        href={href}
        prefetch={prefetch}
        as={as}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        passHref={passHref}>
        {/*  eslint-disable-next-line jsx-a11y/anchor-has-content,react/jsx-props-no-spreading */}
        <a ref={ref} {...other} />
      </NextLink>
    )
  }
)

export default NextComposed
