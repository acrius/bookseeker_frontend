import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/post';
import PostView from '../components/PostView';


class Post extends Component {
  componentDidMount() {
    this.props.actions.getPost(this.props.postId);
  }

  render() {
    return (
      <div>
        <PostView {...this.props.state} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {state: state.post};
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
