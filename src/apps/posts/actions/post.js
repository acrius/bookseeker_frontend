import {
  GET_POST_REQUEST,
  GET_POST_REQUEST_FAILED,
  GET_POST_REQUEST_SUCCESS } from '../constants';
import { getPost as apiGetPost } from '../../../bookseeker_posts_api/data';

export function getPost(id) {
  return (dispatch) => {
    dispatch({
      type: GET_POST_REQUEST
    });

    try {
      apiGetPost(id).then((data) => dispatch({
                                         type: GET_POST_REQUEST_SUCCESS,
                                         payload: data
                                       }));
    } catch (e) {
      dispatch({
        type: GET_POST_REQUEST_FAILED,
        payload: new Error(e)
      });
    }
  }
}
