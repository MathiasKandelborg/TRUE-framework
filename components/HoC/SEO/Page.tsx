import { CONSTANTS, seo } from '@util/settings'
import { NextSeo } from 'next-seo'
import { OpenGraphImages, OpenGraphProfile, Twitter } from 'next-seo/lib/types'

interface IPageSEOProps {
  title?: string
  description?: string
  images?: OpenGraphImages[]
  defaultImageHeight?: number
  defaultImageWidth?: number
  ogUrl?: string
  ogSiteName?: string
  ogTitle?: string
  ogDescription?: string
  ogProfile?: OpenGraphProfile
  ogLocale?: string
  ogType?: string
  twitter?: Twitter
}

const PageSEO: React.FC<IPageSEOProps> = (props) => {
  const seoImgUrl = CONSTANTS.DEV ? 'http://localhost:3000' : seo.url
  const {
    title = seo.title,
    description = seo.description,
    defaultImageHeight = 1250,
    defaultImageWidth = 2500,
    images = [
      {
        url: `${seoImgUrl}/images/TRUE-logo-social-large-blue.png`,
        height: defaultImageHeight,
        width: defaultImageWidth
      }
    ],
    ogTitle = seo.ogTitle,
    ogDescription = seo.ogDescription,
    ogSiteName = seo.title,
    ogUrl = seo.url,
    ogLocale,
    ogProfile = {
      firstName: seo.author.firstName,
      lastName: seo.author.lastName,
      username: seo.author.username,
      gender: seo.author.gender
    },
    ogType = ' website',
    twitter = {
      cardType: 'summary_large_image',
      handle: seo.author.twitterHandle,
      site: seo.url
    }
  } = props

  return (
    <NextSeo
      {...{ noindex: false, nofollow: false, title, description }}
      twitter={{ ...twitter }}
      openGraph={{
        url: ogUrl,
        site_name: ogSiteName,
        type: ogType,
        locale: ogLocale,
        title: ogTitle,
        description: ogDescription,
        defaultImageHeight,
        defaultImageWidth,
        profile: ogProfile,
        images
      }}
    />
  )
}

export default PageSEO
