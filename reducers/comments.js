import {
  GET_COMMENTS,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAILURE
} from '../actions/types'

const initialState = {
  comments: [],
  loading: false,
  error: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_COMMENTS:
      return { ...state, loading: true, error: null }

    case GET_COMMENTS_SUCCESS:
      return { ...state, loading: false, comments: action.payload, error: null }

    case GET_COMMENTS_FAILURE:
      return { ...state, loading: false, error: action.payload }

    default:
      return state
  }
}
