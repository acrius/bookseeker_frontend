import { buildRequestPath } from '../utils/request';

export const HOST = 'http://localhost:8000/';
export const API_PATH = buildRequestPath(HOST, 'api/v01/')
export const GET_POSTS_QUERY_PATH = buildRequestPath(API_PATH, 'posts/');
export const COMMENTS_QUERY_PATH = buildRequestPath(API_PATH, 'comments/');

export const REST_AUTH_QUERY_PATH = buildRequestPath(HOST, 'rest-auth/');
export const REGISTRATION_QUERY_PATH = buildRequestPath(REST_AUTH_QUERY_PATH, 'registration/');
export const VERIFY_EMAIL_QUERY_PATH = buildRequestPath(REGISTRATION_QUERY_PATH, 'verify-email/');
export const LOGIN_QUERY_PATH = buildRequestPath(REST_AUTH_QUERY_PATH, 'login/');
export const LOGOUT_QUERY_PATH = buildRequestPath(REST_AUTH_QUERY_PATH, 'logout/');
export const GET_CURRENT_USER_QUERY_PATH = buildRequestPath(REST_AUTH_QUERY_PATH, 'user/');

export const REFRESH_TOKEN_QUERY_PATH = buildRequestPath(HOST, 'api-token-refresh/');

export const JWT_KEY = 'bookseeker_posts_jwt';
