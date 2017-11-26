import {
  REGISTRATION_REQUEST,
  REGISTRATION_REQUEST_FAILED,
  REGISTRATION_REQUEST_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_REQUEST_FALIED,
  LOGIN_REQUEST_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_REQUEST_FAILED,
  LOGOUT_REQUEST_SUCCESS,
  CONFIRM_REQUEST,
  CONFIRM_REQUEST_FAILED,
  CONFIRM_REQUEST_SUCCESS,
  OPEN_LOGIN_DIALOG,
  CLOSE_LOGIN_DIALOG,
  AUTHORIZED,
  UNAUTHORIZED } from '../constants';

const userDataInitialState = {
  pk: 0,
  username: '',
  first_name: '',
  last_name: '',
  email: '',
  status: UNAUTHORIZED
};

const requestInitialState = {
  registerFetching: false,
  loginFetching: false,
  logoutFetching: false,
  registerError: null,
  loginError: null,
  logoutError: null
};

const authDialogInitialState = {
  isOpenAuthDialog: false
};

const confirmEmailInitialState = {
  confirmFetching: false,
  confirmError: null,
  confirmMessage: ''
};

export const initialState = {
  ...userDataInitialState,
  ...requestInitialState,
  ...authDialogInitialState,
  ...confirmEmailInitialState
};

export const auth = (state = initialState, action) => {
  return {
    ...state,
    ...registration(action),
    ...login(action),
    ...logout(action),
    ...authDialog(action),
    ...confirm(action)
  };
};

const authDialog = (action) => {
  let newState = {};

  switch (action.type) {
    case OPEN_LOGIN_DIALOG:
      newState = {isOpenAuthDialog: true};
      break;
    case CLOSE_LOGIN_DIALOG:
      newState = {isOpenAuthDialog: false};
      break;
    }

  return newState;
}

const registration = (action) => {
  let newState = {};

  switch (action.type) {
    case REGISTRATION_REQUEST:
      newState = {
        registerError: null,
        registerFetching: true
      };
      break;
    case REGISTRATION_REQUEST_FAILED:
      newState = {
        registerError: action.payload,
        registerFetching: false
      };
      break;
    case REGISTRATION_REQUEST_SUCCESS:
      newState = {
        ...action.payload,
        status: AUTHORIZED,
        isOpenAuthDialog: false,
        registerError: null,
        registerFetching: false
      };
      break;
  }

  return newState;
};

const login = (action) => {
  let newState = {};

  switch (action.type) {
    case LOGIN_REQUEST:
      newState = {
        loginError: null,
        loginFetching: true
      };
      break;
    case LOGIN_REQUEST_FALIED:
      newState = {
        loginError: action.payload,
        loginFetching: false
      };
      break;
    case LOGIN_REQUEST_SUCCESS:
      newState = {
        ...action.payload,
        status: AUTHORIZED,
        loginError: null,
        loginFetching: false,
        isOpenAuthDialog: false
      };
      break;
  }

  return newState;
};

const logout = (action) => {
  let newState = {};

  switch (action.type) {
    case LOGOUT_REQUEST:
      newState = {
        logoutError: null,
        logoutFetching: true
      };
      break;
    case LOGOUT_REQUEST_FAILED:
      newState = {
        logoutError: action.payload,
        logoutFetching: false
      };
      break;
    case LOGOUT_REQUEST_SUCCESS:
      newState = userDataInitialState;
      break;
  }

  return newState;
};

const confirm = (action) => {
  let newState = {};

  switch (action.type) {
    case CONFIRM_REQUEST:
      newState = {
        confirmFetching: true,
        confirmError: null
      };
      break;
    case CONFIRM_REQUEST_FAILED:
      newState = {
        confirmFetching: false,
        confirmError: action.payload,
        confirmMessage: 'Произошла ошибка при подтверждении почтового ящика...'
      };
      break;
    case CONFIRM_REQUEST_SUCCESS:
      newState = {
        confirmFetching: false,
        confirmError: null,
        confirmMessage: 'Благодорим за регистрацию!!!'
      };
      break;
  }

  return newState;
}
