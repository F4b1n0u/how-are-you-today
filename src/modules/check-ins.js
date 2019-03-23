import { combineReducers } from 'redux'
export const KEY = 'check-ins'
export const NAME_SPACE = 'CHECK-INS'

import { ajaxGetCheckIns } from '#services/json-server'

// State
const initialState = {
  list: [],
  status: {
    isPending: null,
    error: null,
  }
}

// Actions
export const START_FETCH = `${NAME_SPACE}/START_FETCH`
export const FETCH_SUCCESS = `${NAME_SPACE}/FETCH_SUCCESS`
export const FETCH_FAILURE = `${NAME_SPACE}/FETCH_FAILURE`

// Reducers
function listReducer(
  state = initialState.list,
  {
    type,
    payload,
  }
) {
  
  switch (type) {
    case FETCH_SUCCESS: 
      return payload
    default:
      return state
  }
}

function statusReducer(
  state = initialState.status,
  {
    type,
    payload,
  }
) {
  switch (type) {
    case START_FETCH:
      return {
        isPending: true,
        error: null,
      }
    case FETCH_SUCCESS:
      return {
        isPending: false,
        error: null,
      }
    case FETCH_FAILURE:
      return {
        isPending: false,
        error: payload,
      }
    default:
      return state
  }
}

export default combineReducers({
  list: listReducer,
  status: statusReducer,
})

// Action Creators
export const startFetch = () => ({
  type: START_FETCH,
})
export const fetchSuccess = (data) => ({
  type: FETCH_SUCCESS,
  payload: data,
})
export const fetchFailure = () => ({
  type: FETCH_FAILURE,
  payload: error
})

// Side effects
export const fetch = () => (dispatch) => {
  dispatch(startFetch())
  ajaxGetCheckIns()
    .then(data => dispatch(fetchSuccess(data)))
    .catch(error => dispatch(fetchFailure(error)))
}
