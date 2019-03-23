import axios from 'axios'
import {
  API_HOST,
  API_PORT,
} from '#env'

const URI = `${API_HOST}:${API_PORT}`

export const ajaxGetFeelings = () => axios
  .get(`${URI}/feelings`)
  .then(({ data }) => data)
  .catch(error => error)

export const ajaxGetCheckIns = () => axios
  .get(`${URI}/check-ins`)
  .then(({ data }) => data)
  .catch(error => error)

export const ajaxPutCheckIn = (checkIn) => axios
  .put(`${URI}/check-ins`, checkIn)
  .then(({ data }) => data)
  .catch(error => error)