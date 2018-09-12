import { combineReducers } from 'redux'
import posts from './posts'
import comments from './comments'
// import { LOG_OUT } from '../actions/types'

export default appReducer = combineReducers({
  posts,
  comments
})

// const appReducer = combineReducers({
//   posts,
//   user
// })

// export default rootReducer = (state, action) => {
//   if (action.type === LOG_OUT) {
//     state = undefined
//   }
//
//   return appReducer(state, action)
// }
