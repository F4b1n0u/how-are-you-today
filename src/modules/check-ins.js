import { combineReducers } from 'redux'
export const KEY = 'check-ins'
export const NAME_SPACE = 'CHECK-INS'

import {
  getCheckIns,
  putCheckIn,
} from '#services/json-server'

// State
const initialState = {
  list: [],
  status: {
    isSaving: null,
    isPending: null,
    error: null,
  }
}

// Actions
export const START_FETCH = `${NAME_SPACE}/START_FETCH`
export const FETCH_SUCCESS = `${NAME_SPACE}/FETCH_SUCCESS`
export const FETCH_FAILURE = `${NAME_SPACE}/FETCH_FAILURE`

export const START_SAVE = `${NAME_SPACE}/START_SAVE`
export const SAVE_SUCCESS = `${NAME_SPACE}/SAVE_SUCCESS`
export const SAVE_FAILURE = `${NAME_SPACE}/SAVE_FAILURE`

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

    case START_SAVE:
      return {
        isSaving: true,
        error: null,
      }
    case SAVE_SUCCESS:
      return {
        isSaving: false,
        error: null,
      }
    case SAVE_FAILURE:
      return {
        isSaving: false,
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

export const startSave = () => ({
  type: START_SAVE,
})
export const saveSuccess = () => ({
  type: SAVE_SUCCESS,
})
export const saveFailure = (error) => ({
  type: SAVE_FAILURE,
  payload: error
})

// Side effects
export const fetch = () => dispatch => {
  dispatch(startFetch())
  getCheckIns()
    .then(data => dispatch(fetchSuccess(data)))
    .catch(error => dispatch(fetchFailure(error)))
}

export const save = checkIn => dispatch => {
  dispatch(startSave())
  putCheckIn(checkIn)
    .then(() => dispatch(saveSuccess()))
    .catch(error => dispatch(saveFailure(error)))
}

// Selectors
export const getAll = state => state[KEY].list
export const getStatus = state => state[KEY].status
export const isSaving = state => getStatus(state).isSaving
export const isPending = state => getStatus(state).isPending
export const getError = state => getStatus(state).error
