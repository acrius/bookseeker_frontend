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

const commentsInitialState = {
  comments: [],
  fetching: false,
  error: null
};

const commentInitialState = {
  post: '',
  parent: '',
  content: ''
};

const uiInitialState = {
  isOpenCommentForm: false,
  selectedComment: ''
};

const initialState = {
  ...commentsInitialState,
  ...commentInitialState,
  ...uiInitialState
};

export default (state = initialState, action) => {
  return {
    ...state,
    ...commentsReduser(action),
    ...postCommentReducer(action),
    ...uiReducer(action)
  };
}

function commentsReduser(action) {
  let newState = {};

  switch (action.type) {
    case GET_COMMENTS_REQUEST:
      newState = {
        fetching: true,
        error: null
      };
      break;
    case GET_COMMENTS_REQUEST_FAILED:
      newState = {
        fetching: false,
        error: action.payload
      };
      break;
    case GET_COMMENTS_REQUEST_SUCCESS:
      newState = {
        comments: action.payload,
        fetching: false,
        error: null
      };
      break;
  }

  return newState;
}

function postCommentReducer(action) {
  let newState = {};

  switch (action.type) {
    case POST_COMMENT_REQUEST:
      newState = {
        fetching: true,
        error: null
      };
      break;
    case POST_COMMENT_REQUEST_FAILED:
      newState = {
        fetching: false,
        error: action.payload,
        isOpenCommentForm: false, selectedComment: null
      };
      break;
    case POST_COMMENT_REQUEST_SUCCESS:
      newState = {
        fetching: false,
        error: null,
        isOpenCommentForm: false, selectedComment: null
      }
      break;
  }

  return newState;
}

function uiReducer(action) {
  let newState = {};

  switch (action.type) {
    case OPEN_COMMENT_FORM:
      newState = { isOpenCommentForm: true, selectedComment: action.payload };
      break;
    case CLOSE_COMMENT_FORM:
      newState = { isOpenCommentForm: false, selectedComment: null };
      break;
  }

  return newState;
}
