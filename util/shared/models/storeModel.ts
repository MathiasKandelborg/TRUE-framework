/** @format */

import StoreModel from 'state/StoreModel'
import navigationStore from './navigation'
import uiStore from './ui'

const storeModel: StoreModel = {
  ...uiStore,
  ...navigationStore
}

export default storeModel
