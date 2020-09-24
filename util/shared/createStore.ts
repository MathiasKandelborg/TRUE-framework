

import { createStore } from 'easy-peasy'
import storeModel from './models/storeModel'

const store = createStore(storeModel)

// Wrapping dev only code like this normally gets stripped out by bundlers
// such as Webpack when creating a production build.
if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept('./models/storeModel', () => {
      store.reconfigure(storeModel)
    })
  }
}

export default store
