import * as types from '../constants/ActionTypes'

const INITIAL_STATE = {
  loading: false,
  errors: []
}
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
  case types.INIT_LOGIN:
    return INITIAL_STATE
  case types.LOGIN_IN_PROGRESS:
    return {
      ...state,
      loading: true
    }

  case types.LOGIN_FINISHED:
    return {
      ...state,
      loading: false,
      errors: action.errors || []
    }

  default:
    return {
      ...state
    }
  }
}