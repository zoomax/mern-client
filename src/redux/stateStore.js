import { createStore, applyMiddleware } from 'redux'
import CombinedReducer from '../reducers/index'
import thunk from 'redux-thunk'
const token = localStorage.getItem('TOKEN')
export default () => {
  return createStore(
    CombinedReducer(),
    {
      auth: {
        token,
        isAuthenticated: token ? true : false
      }
    },
    applyMiddleware(thunk)
  )
}
