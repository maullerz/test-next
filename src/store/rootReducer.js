import { combineReducers } from 'redux'

import settings from 'store/reducers/settings.reducer'

const reducers = {
  settings,
}

const rootReducer = combineReducers({
  ...reducers,
})

export default rootReducer
