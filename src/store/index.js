/* eslint import/no-import-module-exports: off */
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'

import rootReducer from './rootReducer'

const initialState = {}

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(
      thunk,
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  ),
)

if (module.hot) {
  module.hot.accept('./rootReducer', () => {
    store.replaceReducer(rootReducer)
  })
}

export default store
