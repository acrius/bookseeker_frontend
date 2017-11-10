import {
  GET_POSTS_REQUEST,
  GET_POSTS_REQUEST_FAILED,
  GET_POSTS_REQUEST_SUCCESS } from '../constants';
import { getPosts as apiGetPosts } from '../../../bookseeker_posts_api/data';


export function getPosts(page = 1) {
  return (dispatch) => {
    dispatch({
      type: GET_POSTS_REQUEST
    });

    try {
      apiGetPosts().then(
        data => dispatch({
          type: GET_POSTS_REQUEST_SUCCESS,
          payload: data
        })
      )
    } catch (e) {
      dispatch({
        type: GET_POSTS_REQUEST_FAILED,
        payload: new Error(e)
      });
    }
  }
}
