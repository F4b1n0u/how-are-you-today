import axios from 'axios'
import {
  API_HOST,
  API_PORT,
} from './../../env'

const URI = `${API_HOST}:${API_PORT}`

export const getFeelings = () => axios
  .get(`${URI}/feelings`)
  .then(({ data }) => data)

export const getCheckIns = () => axios
  .get(`${URI}/check-ins`)
  .then(({ data }) => data)

export const putCheckIn = (checkIn) => {
  const now = Date.now()
  const data = {
    id: now,
    timestamp: now,
    ...checkIn,
  }

  return axios
    .post(
      `${URI}/check-ins`,
      data
    )
    .then(({ data }) => data)
}