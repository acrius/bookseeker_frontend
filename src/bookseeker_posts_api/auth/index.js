import {
  REGISTRATION_QUERY_PATH,
  LOGIN_QUERY_PATH,
  LOGOUT_QUERY_PATH,
  GET_CURRENT_USER_QUERY_PATH,
  JWT_KEY
} from '../settings';
import { post_json, get_json } from '../../utils/request';
import Storage from '../../utils/storage';

export const registration = (user) =>
  post_json(REGISTRATION_QUERY_PATH, user).then(
    data => {
    saveToken(data);
    return data.user;
  });

export const login = (user) =>
  post_json(LOGIN_QUERY_PATH, user).then(
    data => {
      saveToken(data);
      return data.user;
    });

function saveToken(data) {
  const storage = new Storage();
  storage.set(JWT_KEY, data.token);
}

export const getCurrentUser = () => auth_get_json(GET_CURRENT_USER_QUERY_PATH);

export const hasToken = () => {
  const storage = new Storage();
  return storage.get(JWT_KEY) != null ? true : false;
}

export const logout = () =>
  auth_post_json(LOGOUT_QUERY_PATH).then((data) => {
    const storage = new Storage();
    storage.remove(JWT_KEY);
  });


export const auth_get_json = (path) =>
  get_json(path, getAuthorizationHeaders());

export const auth_post_json = (path, data={}) =>
  post_json(path, data, getAuthorizationHeaders());

function getAuthorizationHeaders() {
  const storage = new Storage();
  return {'Authorization': `JWT ${storage.get(JWT_KEY)}`};
}
