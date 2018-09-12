import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
  GET_POST,
  GET_POST_SUCCESS,
  GET_POST_FAILURE,
  CLEAR_POST
} from '../actions/types'

const initialState = {
  posts: [],
  loading: false,
  postLoading: false,
  error: null,
  post: null
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

    case GET_POST:
      return { ...state, postLoading: true, error: null }

    case GET_POST_SUCCESS:
      return { ...state, postLoading: false, post: action.payload }

    case GET_POST_FAILURE:
      return { ...state, postLoading: false, error: action.payload }

    case CLEAR_POST:
      return { ...state, post: null }

    default:
      return state
  }
}
