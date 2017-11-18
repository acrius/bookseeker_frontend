import {
  GET_POST_REQUEST,
  GET_POST_REQUEST_FAILED,
  GET_POST_REQUEST_SUCCESS
} from '../constants';

const initialState = {
  id: 0,
  content: '',
  owner: {
    username: '',
    url: ''
  },
  tags : [],
  url: '',
  publicationDate: null,
  fetching: false,
  error: null
};

export default (state = initialState, action) => {
  let newState = {};

  switch (action.type) {
    case GET_POST_REQUEST:
      newState = {
        fetching: true,
        error: null
      };
      break;
    case GET_POST_REQUEST_FAILED:
      newState = {
        fetching: false,
        error: action.payload
      };
      break;
    case GET_POST_REQUEST_SUCCESS:
      newState = {
        ...action.payload,
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
