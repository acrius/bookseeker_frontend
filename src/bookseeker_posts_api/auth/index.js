import {
  REGISTRATION_QUERY_PATH,
  LOGIN_QUERY_PATH,
  LOGOUT_QUERY_PATH,
  GET_CURRENT_USER_QUERY_PATH,
  VERIFY_EMAIL_QUERY_PATH,
  REFRESH_TOKEN_QUERY_PATH,
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


export const auth_get_json = (path) => {
  try {
    return get_json(path, getAuthorizationHeaders()).then(
      response_data => {
        if (response_data != null) {
          return response_data
        } else {
          throw Error("Null data!!!");
        }
      }
    );
  } catch (e) {
    refreshToken();
    return get_json(path, getAuthorizationHeaders());
  }

}

export const auth_post_json = (path, data={}) =>
{
  try {
    return post_json(path, data, getAuthorizationHeaders()).then(
      response_data =>
      {
        if (response_data != null) {
          return response_data;
        } else {
          throw Error("Null data!!!");
        }
      }
    );
  } catch (e) {
    refreshToken();
    return post_json(path, data, getAuthorizationHeaders());
  }
}

function refreshToken() {
  const storage = new Storage();
  post_json(REFRESH_TOKEN_QUERY_PATH, {token: storage.get(JWT_KEY)}).then(
    data => saveToken(data)
  );
}

function getAuthorizationHeaders() {
  const storage = new Storage();
  return {'Authorization': `JWT ${storage.get(JWT_KEY)}`};
}

export const verifyEmail = (key) =>
  post_json(VERIFY_EMAIL_QUERY_PATH, {key: key})
