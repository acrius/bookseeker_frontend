import {
  GET_POSTS_REQUEST,
  GET_POSTS_REQUEST_FAILED,
  GET_POSTS_REQUEST_SUCCESS
} from '../constants';

const initialState = {
  posts: [],
  count: 0,
  next: null,
  previous: null,
  fetching: false,
  error: null
};

export default (state = initialState, action) => {
  let newState = {};

  switch (action.type) {
    case GET_POSTS_REQUEST:
      newState = {
        fetching: true,
        error: null
      };
      break;
    case GET_POSTS_REQUEST_FAILED:
      newState = {
        fetching: false,
        error: action.payload
      };
      break;
    case GET_POSTS_REQUEST_SUCCESS:
      newState = {
        posts: action.payload.results,
        count: action.payload.count,
        next: action.payload.next,
        previous: action.payload.previous,
        fetching: false,
        error: null
      };
      break;
  }

  return {
    ...state,
    ...newState
  };
}
