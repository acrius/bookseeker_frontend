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
  REGISTRATION_QUERY_PATH,
  TOKEN_AUTH_PATH,
  REFRESH_TOKEN_AUTH_PATH,
  OPEN_LOGIN_DIALOG,
  CLOSE_LOGIN_DIALOG
} from '../constants';
import {
  login as apiLogin,
  getCurrentUser as apiGetCurrentUser,
  registration as apiRegistration,
  hasToken, logout as apiLogout,
  verifyEmail
 } from '../../../bookseeker_posts_api/auth';

export function openAuthDialog() {
  return (dispatch) => dispatch({type: OPEN_LOGIN_DIALOG});
}

export function closeAuthDialog() {
  return (dispatch) => dispatch({type: CLOSE_LOGIN_DIALOG});
}

export function registration(data) {
  return (dispatch) => {
    dispatch({
      type: REGISTRATION_REQUEST
    });

    try {
      apiRegistration(data).then(
        data =>
          dispatch({
            type: LOGIN_REQUEST_SUCCESS,
            payload: data}));
    } catch (error) {
      dispatch({
        type: REGISTRATION_REQUEST_FAILED,
        payload: new Error(error)
      });
    }
  };
}

export function login(data) {
  return (dispatch) => {
    dispatch({
      type: LOGIN_REQUEST
    });

    try {
      apiLogin(data).then((data) =>
        dispatch({
          type: LOGIN_REQUEST_SUCCESS,
          payload: data}));
    } catch (error) {
      dispatch({
        type: LOGIN_REQUEST_FALIED,
        payload: new Error(error)
      });
    }
  };
}

export function logout() {
  return (dispatch) => {
    dispatch({
      type: LOGOUT_REQUEST
    });

    try {
      apiLogout().then(
        (data) => dispatch({
          type: LOGOUT_REQUEST_SUCCESS
        }));
    } catch (error) {
      dispatch({
        type: LOGOUT_REQUEST_FAILED,
        payload: new Error(error)
      });
    }
  };
}

export function getCurrentUser() {
  return (dispatch) => {
    if (hasToken()) {
      apiGetCurrentUser().then((data) => {
      if (data != null) {
        dispatch({
          type: LOGIN_REQUEST_SUCCESS,
          payload: data});
        }}
      )
    }
  };
}

export function confirmEmail(key) {
  return (dispatch) => {
    dispatch({
      type: CONFIRM_REQUEST
    });

    try {
      verifyEmail(key).then(
        dispatch({
          type: CONFIRM_REQUEST_SUCCESS
        })
      );
    } catch (error) {
      dispatch({
        type: CONFIRM_REQUEST_FAILED,
        payload: new Error(error)
      })
    }
  }
}
