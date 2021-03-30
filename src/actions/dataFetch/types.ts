export const ActionTypes = {
  FETCH_PENDING: 'FETCH_PENDING',
  FETCH_FULFILLED: 'FETCH_FULFILLED',
  FETCH_REJECTED: 'FETCH_REJECTED',
} as const

export type FetchPending = () => { type: 'FETCH_PENDING' }
export type FetchFulfilled = <T>(
  data: T
) => {
  type: 'FETCH_FULFILLED'
  payload: T
}
export type FetchRejected = (
  error: Error | null
) => {
  type: 'FETCH_REJECTED'
  payload: Error | null
}

export type InitialState<T> = {
  data: T
  isLoading: boolean
  error: Error | null
}
