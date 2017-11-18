import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import CommentsView from '../components/CommentsView';
import CommentDialog from '../components/CommentForm';

class Comments extends Component {
  componentDidMount() {
    this.props.actions.getComments(this.props.postId);
  }

  openCommentForm = () => {
    this.props.actions.openCommentForm(null);
  }

  render() {
    return (
      <section>
        <input type="button" value="Комментировать" onClick={this.openCommentForm} style={{margin: '1rem'}}/>
        <CommentsView comments={this.props.state.comments} parent={null} shift={0} openCommentForm={this.props.actions.openCommentForm}/>
        <CommentDialog isOpen={ this.props.state.isOpenCommentForm} postComment={this.props.actions.postComment} onRequestClose={this.props.actions.closeCommentForm} />
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state.comments,
    post: state.post.id
  };
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)
