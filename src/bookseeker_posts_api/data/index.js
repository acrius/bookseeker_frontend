import { GET_POSTS_QUERY_PATH, COMMENTS_QUERY_PATH } from '../settings';
import { auth_post_json } from '../auth';
import { get_json } from '../../utils/request';

export const getPosts = (page = 1) => get_json(`${GET_POSTS_QUERY_PATH}?page=${page}`);

export const getPost = (id) => get_json(`${GET_POSTS_QUERY_PATH}${id}/`);

export const getComments = (postId) => get_json(`${COMMENTS_QUERY_PATH}?post=${postId}`);

export const postComment = (data) => auth_post_json(`${COMMENTS_QUERY_PATH}`, data);
