import { GET_SECRET } from '../actions/action.types'

const DEFAULT_STATE = {
  secret: ''
}

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case GET_SECRET:
      return Object.assign({}, state, { secret: action.payload })
    default:
      return state
  }
}
