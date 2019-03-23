import { combineReducers } from 'redux'

import appReducer, {
  KEY as APP_KEY,
} from '#modules/app'

import checkInsReducer, {
  KEY as CHECK_INS_KEY,
} from '#modules/check-ins'

import feelingsReducer, {
  KEY as FEELINGS_KEY,
} from '#modules/feelings'

// Reducers
export default combineReducers({
  [APP_KEY]: appReducer,
  [CHECK_INS_KEY]: checkInsReducer,
  [FEELINGS_KEY]: feelingsReducer,
})
