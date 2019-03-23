import { combineReducers } from 'redux'

import appReducer, {
  KEY as APP_KEY,
} from '#modules/app'

// Reducers
export default combineReducers({
  [APP_KEY]: appReducer,
})
