import {
  AUTH_SIGN_UP,
  AUTH_SIGN_UP_ERROR,
  AUTH_INIT,
  AUTH_SIGN_OUT,
  AUTH_SIGN_IN,
  AUTH_SIGN_IN_ERROR
} from '../actions/action.types'
const DEFAULT_STATE = {
  isAuthenticated: false,
  errorMessage: '',
  token: '',
  status: 'bending...'
}

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case AUTH_INIT:
      return Object.assign({}, state)
    case AUTH_SIGN_UP:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload,
        errorMessage: '',
        status: 'success'
      }
    case AUTH_SIGN_IN:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload,
        errorMessage: '',
        status: 'success'
      }
    case AUTH_SIGN_OUT:
      return {
        ...state,
        isAuthenticated: false,
        token: action.payload,
        errorMessage: '',
        status: 'success'
      }

    case AUTH_SIGN_UP_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
        status: 'failure'
      }

    case AUTH_SIGN_IN_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
        status: 'failure'
      }
    default:
      return state
  }
}
