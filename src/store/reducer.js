import {
  GET_ALL_POST_SUCCESS,
  GET_ALL_POST_FAILED,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILED,
  ADD_POST_SUCCESS,
  ADD_POST_FAILED,
  EDIT_POST_SUCCESS,
  EDIT_POST_FAILED
} from './types'

const initialState = {
  isLoading: false,
  post: [],
}

const posts = (state = initialState, action) => {

  const { type, payload, isLoading } = action;
  switch (type) {
    case GET_ALL_POST_SUCCESS:
      return {
        ...state,
        post: payload,
        isLoading
      };
    case GET_ALL_POST_FAILED:
      return {
        ...state,
      };
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        post: state.post.filter(item => item.id !== payload),
        isLoading
      };
    case DELETE_POST_FAILED:
      return {
        ...state,
      };
    case ADD_POST_SUCCESS:
      return [...state, payload]
    case ADD_POST_FAILED:
      return {
        ...state,
      };
    case EDIT_POST_SUCCESS:
      return [...state, payload]
    case EDIT_POST_FAILED:
      return {
        ...state
      };
    default:
      return { ...state }
  }
}

export default posts;