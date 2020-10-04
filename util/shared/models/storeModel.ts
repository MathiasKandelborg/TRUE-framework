import IStoreModel from 'state/StoreModel'
import navigationStore from './navigation'
import uiStore from './ui'

const storeModel: IStoreModel = {
  ...uiStore,
  ...navigationStore
}

export default storeModel
