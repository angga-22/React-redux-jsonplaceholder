import * as types from './types';
import axios from 'axios';
import API_ENDPOINT from '../data/api-endpoint';

export const getAllPosts = () => async (dispatch) => {
  try {
    const result = await axios.get(`${API_ENDPOINT.HOME}/posts`)
    console.log(result);
    dispatch({
      type: types.GET_ALL_POST_SUCCESS,
      payload: result.data,
      isLoading: false
    })
  } catch (error) {
    dispatch({
      type: types.GET_ALL_POST_FAILED,
      error: true
    })
  }
}

export const addPost = (data) => async (dispatch) => {
  try {
    const result = await axios.post(`${API_ENDPOINT.HOME}/posts`, data)
    dispatch({
      type: types.ADD_POST_SUCCESS,
      payload: result
    })
    dispatch(getAllPosts())
  } catch (error) {
    dispatch({
      type: types.ADD_POST_FAILED,
      error: true
    })
  }
}

export const editPost = (post_id, data) => async (dispatch) => {
  try {
    const result = await axios.patch(`${API_ENDPOINT.HOME}/posts/${post_id}`, data)
    dispatch({
      type: types.EDIT_POST_SUCCESS,
      payload: result.data
    })
    dispatch(getAllPosts())

  } catch (error) {
    dispatch({
      type: types.EDIT_POST_FAILED,
      error: true
    })
  }
}

export const deletePost = (post_id) => async (dispatch) => {
  try {
    await axios.delete(`${API_ENDPOINT.HOME}/posts/${post_id}`)
    dispatch({
      type: types.DELETE_POST_SUCCESS,
      payload: post_id
    })
    // dispatch(getAllPosts())
  } catch (error) {
    dispatch({
      type: types.DELETE_POST_FAILED,
      error: true
    })
  }
}