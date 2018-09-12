import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE
} from './types'

import api from '../utils/api'

export function getPosts() {
  return (dispatch, getState) => {
    dispatch({ type: GET_POSTS })

    const endpoint = '/posts'

    api.url(endpoint)
      .get()
      .json((json) => {
        dispatch({ type: GET_POSTS_SUCCESS, payload: json })
      })
      .catch((error) => {
        dispatch({ type: GET_POSTS_FAILURE, payload: error })
      })
  }
}
