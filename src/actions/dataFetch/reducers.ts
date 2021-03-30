import { ActionTypes, InitialState } from './types'
import * as creators from './actions'
import { CreatorsToActions } from '../../types/creatorsToActions'

type Actions = CreatorsToActions<typeof creators>

export const initialState = <T>(initData: T): InitialState<T> => ({
  data: initData,
  isLoading: false,
  error: null,
})

export const createDataFetchReducer = <T>() => (
  state: InitialState<T>,
  action: Actions
): InitialState<T> => {
  switch (action.type) {
    case ActionTypes.FETCH_PENDING:
      return {
        ...state,
        isLoading: true,
      }
    case ActionTypes.FETCH_FULFILLED: {
      return {
        ...state,
        data: action.payload as T,
        isLoading: false,
      }
    }
    case ActionTypes.FETCH_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    default:
      throw new Error('Action not supported')
  }
}
