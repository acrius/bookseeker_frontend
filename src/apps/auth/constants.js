//States
//Registration states
export const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST';
export const REGISTRATION_REQUEST_FAILED = 'REGISTRATION_REQUEST_FAILED';
export const REGISTRATION_REQUEST_SUCCESS = 'REGISTRATION_REQUEST_SUCCESS';

//Login states
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_REQUEST_FALIED = 'LOGIN_REQUEST_FALIED';
export const LOGIN_REQUEST_SUCCESS = 'LOGIN_REQUEST_SUCCESS';

//Logout states
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_REQUEST_FAILED = 'LOGOUT_REQUEST_FAILED';
export const LOGOUT_REQUEST_SUCCESS = 'LOGOUT_REQUEST_SUCCESS';

//Queries paths
export const REGISTRATION_QUERY_PATH = '/rest-auth/registration/';
export const TOKEN_AUTH_PATH = '/api-token-auth/';
export const REFRESH_TOKEN_AUTH_PATH = '/api-token-refresh/';

//Auth statuses
export const AUTHORIZED = 'AUTHORIZED';
export const UNAUTHORIZED = 'UNAUTHRIZED';

//Dialogs actions
export const OPEN_LOGIN_DIALOG = 'OPEN_LOGIN_DIALOG';
export const CLOSE_LOGIN_DIALOG = 'CLOSE_LOGIN_DIALOG';

//Auth form types
export const LOGIN_FORM = 'LOGIN_FORM';
export const REGISTRATION_FORM = 'REGISTRATION_FORM';
