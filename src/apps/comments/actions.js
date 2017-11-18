import {
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_REQUEST_FAILED,
  GET_COMMENTS_REQUEST_SUCCESS,
  POST_COMMENT_REQUEST,
  POST_COMMENT_REQUEST_FAILED,
  POST_COMMENT_REQUEST_SUCCESS,
  OPEN_COMMENT_FORM,
  CLOSE_COMMENT_FORM
} from './constants';
import {getComments as apiGetComments, postComment as apiPostComment} from '../../bookseeker_posts_api/data';
import {hasToken} from '../../bookseeker_posts_api/auth';

export function openCommentForm(parent) {
    return(dispatch) => {
      if (hasToken()) {
        dispatch({type: OPEN_COMMENT_FORM, payload: parent});
      } else {
        alert("Сначала войдите!!!");
      }
    }
}

export function closeCommentForm() {
  return(dispatch) => dispatch({type: CLOSE_COMMENT_FORM});
}

export function postComment(commentData) {
  return(dispatch, getState) => {
      dispatch({type: POST_COMMENT_REQUEST});

      try {
        apiPostComment({post: getState().post.url, parent: getState().comments.selectedComment, ...commentData}).then(() => dispatch({type: POST_COMMENT_REQUEST_SUCCESS}))
                                   .then(() => getComments(getState().post.id)).then((action) => action((dispatch)))
      } catch (error) {
        dispatch({type: POST_COMMENT_REQUEST_FAILED, payload: new Error(error)});
      }
  }
}

export function getComments(postId) {
  return dispatch => {
    dispatch({type: GET_COMMENTS_REQUEST});

    try {
      apiGetComments(postId).then(data => dispatch({type: GET_COMMENTS_REQUEST_SUCCESS, payload: data.results}));
    } catch (error) {
      dispatch({type: GET_COMMENTS_REQUEST_FAILED, payload: new Error(error)});
    }
  }
}
