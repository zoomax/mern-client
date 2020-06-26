import { combineReducers } from 'redux'
import { reducer as fromReducer } from 'redux-form'
import dash from './dashboard'

import AuthReducer from './auth'

export default () => {
  return combineReducers({
    form: fromReducer,
    auth: AuthReducer,
    dash
  })
}
