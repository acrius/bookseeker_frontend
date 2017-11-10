import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/posts';
import PostPreview from '../components/PostPreview';


class Posts extends Component {

  getPostsPreviews = (posts) => posts.map((post) => <PostPreview key={post.id} {...post} />);

  componentDidMount() {
    this.props.actions.getPosts();
  }

  render() {
    return (
      <div>
        {this.getPostsPreviews(this.props.state.posts)}
      </div>);
  }
}

function mapStateToProps(state){
  return {state: state.posts};
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
