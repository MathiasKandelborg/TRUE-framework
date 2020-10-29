import { UTILITY } from 'settings/UTILITY'

const seo: UTILITY.SEOSettings = {
  applicationName:
    process.env.NEXT_PUBLIC_PROJECT_APP_NAME || 'NO APP_NAME IN `.env`',
  url: process.env.NEXT_PUBLIC_PROJECT_URL || 'NO HOSTNAME IN `.env`',
  title: process.env.NEXT_PUBLIC_PROJECT_TITLE || 'NO TITLE IN `.env`',
  description:
    process.env.NEXT_PUBLIC_PROJECT_DESCRIPTION || 'NO DESCRIPTION IN `.env``',
  ogTitle: process.env.NEXT_PUBLIC_PROJECT_OG_TITLE || 'NO OG TITLE IN `.env`',
  ogDescription:
    process.env.NEXT_PUBLIC_PROJECT_OG_DESCRIPTION ||
    'NO OG DESCRIPTION IN `.env``',
  author: {
    firstName:
      process.env.NEXT_PUBLIC_PROJECT_OG_AUTHOR_FIRST_NAME ||
      'NO AUTHOR FIRST NAME IN `.env`',
    lastName:
      process.env.NEXT_PUBLIC_PROJECT_OG_AUTHOR_LAST_NAME ||
      'NO AUTHOR LAST NAME IN `.env`',
    twitterHandle:
      process.env.NEXT_PUBLIC_PROJECT_OG_AUTHOR_HANDLE ||
      'NO AUTHOR HANDLE IN `.env`',
    username:
      process.env.NEXT_PUBLIC_PROJECT_OG_AUTHOR_USERNAME ||
      'NO AUTHOR USERNAME IN `.env``',
    gender:
      process.env.NEXT_PUBLIC_PROJECT_OG_AUTHOR_GENDER ||
      'NO AUTHOR GENDER IN `.env`',
    avatar:
      process.env.NEXT_PUBLIC_PROJECT_OG_AUTHOR_AVATAR ||
      'NO AUTHOR AVATAR IN `.env`'
  }
}

export default seo
