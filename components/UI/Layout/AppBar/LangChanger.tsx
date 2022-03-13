import * as MUI from '@mui/material'
import { useStoreActions, useStoreState } from '@util/tsEasyPeasyHooks'
import { common } from '@util/settings'
import { useRouter } from 'next/router'
import { ILocalizedAppRoute } from 'settings/AppRoute'

const LangChanger: React.FC = () => {
  const { availableLangs } = common
  const router = useRouter()

  const langChangeAnchor = useStoreState((s) => s.langChangeAnchor)
  const setLangChangeAnchor = useStoreActions((s) => s.setLangChangeAnchor)

  // Find the current language from the `availableLangs` list in common settings
  const currentLang = availableLangs.find(({ code }) =>
    RegExp(code, 'i').exec(router.locale || 'I18n not enabled in next settings')
  )

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) =>
    setLangChangeAnchor(event.currentTarget)

  const handleMenuClose = () => setLangChangeAnchor(null)

  const handleLangMenuItemClick = (curLang: {
    language: string
    code: string
  }) => {
    // Only change locale if selection differs from current locale.
    if (router.locale === curLang.code) {
      return setLangChangeAnchor(null)
    }

    // Convenience variable for current locale (it's not set if i18n isn't set in next config)
    const curLocale = router.locale || 'Next i18n settings are disabled'

    // FIXME: Make sure custom pages are also included
    // Initialize variable for localization for current route,
    // It starts as the first found route in common.staticRoutes with the current locale
    let localizedCurRoute: ILocalizedAppRoute =
      common.staticRoutes[0][
        `${router.locale || 'Next i18n settings are disabled'}`
      ]

    common.staticRoutes.map((routeLocales) =>
      Object.keys(routeLocales).find((locale) => {
        // if the current path matches the current staticRoute, and it's a different language
        if (
          router.asPath === routeLocales[`${curLocale}`].as &&
          !RegExp(curLocale, 'i').exec(locale)
        ) {
          // Set the current localized route to the current staticRoute with
          localizedCurRoute = routeLocales[`${locale}`]

          return console.info(
            `Current locale: ${curLocale}\nLocale changing to: ${locale}\nCurrent route: ${router.asPath}`
          )
        }

        return console.info('Locale is the same, do nothing.')
      })
    )

    // Change route and locale to locale with its matching route
    router
      .push(localizedCurRoute.as, localizedCurRoute.as, {
        locale: curLang.code
      })
      .catch((e) => console.error(e))

    return handleMenuClose()
  }

  const LangMenuItems = availableLangs.map((curLang) => (
    <MUI.MenuItem
      id={`lang-change-menu-item-${curLang.code}`}
      onClick={() => handleLangMenuItemClick(curLang)}
      key={`menu-item-${curLang.code}`}>
      {curLang.language}
    </MUI.MenuItem>
  ))

  return (
    <>
      <MUI.Button
        style={{ textTransform: 'capitalize' }}
        aria-controls="language-menu"
        aria-haspopup="true"
        onClick={handleButtonClick}>
        {currentLang?.language}
      </MUI.Button>
      <MUI.Menu
        id="language-menu"
        anchorEl={langChangeAnchor}
        keepMounted
        open={Boolean(langChangeAnchor)}
        onClose={handleMenuClose}>
        <MUI.MenuList>{LangMenuItems}</MUI.MenuList>
      </MUI.Menu>
    </>
  )
}

export default LangChanger
