import axios from 'axios';
import { GET_POSTS, DELETE_POST, EDIT_POST } from './actionTypes';

const initialState = {
  posts: [],
  error: false
};

export function getPosts(userId) {
  let data = axios.get(`/api/posts/${userId}`).then(res => res.data);
  return {
    type: GET_POSTS,
    payload: data
  };
}

export function deletePost(postId) {
  let data = axios.delete(`/api/posts/${postId}`).then(res => res.data);
  return {
    type: DELETE_POST,
    payload: data
  };
}

export function editPost(postId, newTitle, newContent) {
  let data = axios
    .put(`/api/posts/${postId}`, { newTitle, newContent })
    .then(res => res.data);
  return {
    type: EDIT_POST,
    payload: data
  };
}

export default function(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case GET_POSTS + '_FULFILLED':
      return { error: false, posts: payload };
    case GET_POSTS + '_REJECTED':
      return { ...state, error: payload };
    case DELETE_POST + '_FULFILLED':
      return { ...state, posts: payload };
    case EDIT_POST + '_FULFILLED':
      return { ...state, posts: payload };
    default:
      return state;
  }
}
