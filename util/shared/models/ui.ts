import { ui } from '@util/settings'
import IUIModel from 'state/UIModel'

const { DarkTheme, Fonts, MainColor, SecondaryColor } = ui

const uiStore: IUIModel = {
  DarkTheme,
  Fonts,
  MainColor,
  SecondaryColor
}

export default uiStore
