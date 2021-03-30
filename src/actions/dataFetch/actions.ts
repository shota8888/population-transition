import {
  ActionTypes,
  FetchFulfilled,
  FetchPending,
  FetchRejected,
} from './types'

export const fetchPending: FetchPending = () => {
  return { type: ActionTypes.FETCH_PENDING }
}

export const fetchFulfilled: FetchFulfilled = <T>(data: T) => {
  return { type: ActionTypes.FETCH_FULFILLED, payload: data }
}

export const fetchRejected: FetchRejected = (error: Error | null) => {
  return { type: ActionTypes.FETCH_REJECTED, payload: error }
}
