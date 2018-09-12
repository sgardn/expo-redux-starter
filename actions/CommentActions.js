import {
  GET_COMMENTS,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAILURE
} from './types'

import api from '../utils/api'

export function getComments(postId) {
  return (dispatch, getState) => {
    dispatch({ type: GET_COMMENTS })

    const endpoint = `/posts/${postId}/comments`

    api.url(endpoint)
      .get()
      .json((json) => {
        dispatch({ type: GET_COMMENTS_SUCCESS, payload: json })
      })
      .catch((error) => {
        dispatch({ type: GET_COMMENTS_FAILURE, payload: error })
      })
  }
}
