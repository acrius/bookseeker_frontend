import { GET_POSTS_QUERY_PATH } from '../settings';
import { get_json } from '../../utils/request';

export const getPosts = (page = 1) => get_json(`${GET_POSTS_QUERY_PATH}?page=${page}`);

export const getPost = (id) => get_json(`${GET_POSTS_QUERY_PATH}${id}/`);
