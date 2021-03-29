import axios from 'axios'

export const resasAxios = axios.create({
  baseURL: 'https://opendata.resas-portal.go.jp',
  headers: {
    'X-API-KEY': process.env.REACT_APP_RESAS_API_KEY,
    'Content-Type': 'application/json;charset=UTF-8',
  },
})
