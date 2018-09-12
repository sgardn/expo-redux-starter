import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
  GET_POST,
  GET_POST_SUCCESS,
  GET_POST_FAILURE,
  CLEAR_POST
} from './types'

import api from '../utils/api'

const endpoint = '/posts'

export function getPosts() {
  return (dispatch, getState) => {
    dispatch({ type: GET_POSTS })

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

export function getPost(id) {
  return (dispatch, getState) => {
    dispatch({ type: GET_POST })

    api.url(`${endpoint}/${id}`)
      .get()
      .json((json) => {
        dispatch({ type: GET_POST_SUCCESS, payload: json })
      })
      .catch((error) => {
        dispatch({ type: GET_POST_FAILURE, payload: error })
      })
  }
}

export function clearPost() {
  return { type: CLEAR_POST }
}
