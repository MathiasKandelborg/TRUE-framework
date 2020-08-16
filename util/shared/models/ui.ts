/** @format */
import { ui } from '@util/settings'
import UIModel from 'state/UIModel'

const { DarkTheme, Fonts, MainColor, SecondaryColor } = ui

const uiStore: UIModel = {
  DarkTheme,
  Fonts,
  MainColor,
  SecondaryColor
}

export default uiStore
