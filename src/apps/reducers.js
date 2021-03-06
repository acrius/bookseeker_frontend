import { combineReducers } from 'redux';
import { auth } from './auth/reducers';
import post from './posts/reducers/post';
import posts from './posts/reducers/posts';
import comments from './comments/reducers';


export default combineReducers({auth, posts, post, comments});
