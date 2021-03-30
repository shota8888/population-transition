import { useEffect, useReducer, useRef } from 'react'
import {
  fetchFulfilled,
  fetchPending,
  fetchRejected,
} from '../actions/dataFetch/actions'
import {
  createDataFetchReducer,
  initialState,
} from '../actions/dataFetch/reducers'
import { InitialState } from '../actions/dataFetch/types'
import { resasAxios } from '../api/resasApi'

type Cache<T> = {
  [url: string]: T
}
type FetchData = (url: string) => Promise<void>
type ResultUseFetch<T> = { state: InitialState<T>; fetchData: FetchData }

export const useFetch = <T>(
  initialData: T,
  url?: string
): ResultUseFetch<T> => {
  const dataFetchReducer = createDataFetchReducer<T>()
  const [state, dispatch] = useReducer(
    dataFetchReducer,
    initialState(initialData)
  )
  const cache = useRef<Cache<T>>({})
  const cancelRequest = useRef<boolean>(false)

  const fetchData: FetchData = async (url) => {
    dispatch(fetchPending())

    if (cache.current[url]) {
      dispatch(fetchFulfilled(cache.current[url]))
    } else {
      try {
        const response = await resasAxios.get(url)
        cache.current[url] = response.data

        if (cancelRequest.current) return

        dispatch(fetchFulfilled(response.data))
      } catch (error) {
        if (cancelRequest.current) return

        dispatch(fetchRejected(error))
      }
    }
  }

  useEffect(() => {
    if (!url) return

    fetchData(url)

    return () => {
      cancelRequest.current = true
    }
  }, [url])

  return { state, fetchData }
}
