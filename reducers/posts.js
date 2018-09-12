import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE
} from '../actions/types'

const initialState = {
  posts: [],
  loading: false,
  error: null
}

export default (state = initialState, action) => {
  console.log(action.type)
  console.log(action.payload)

  switch(action.type) {
    case GET_POSTS:
      return { ...state, loading: true, error: null }

    case GET_POSTS_SUCCESS:
      return { ...state, loading: false, posts: action.payload, error: null }

    case GET_POSTS_FAILURE:
      return { ...state, loading: false, error: action.payload }

    default:
      return state
  }
}
