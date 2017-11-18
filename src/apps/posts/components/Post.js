import React from 'react';
import Post from '../containers/Post';
import Comments from '../../comments/containers/Comments';

export default (props) =>
(
  <div>
    <Post postId={props.match.params.id} />
    <Comments postId={props.match.params.id}/>
  </div>
);
