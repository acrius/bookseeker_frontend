import React, { Component } from 'react';
import CommentView from './CommentView';

export default class CommentsView extends Component {
  render() {
    const comments = this.props.comments
                               .filter(comment => comment.parent == this.props.parent)
                               .map(comment => <CommentView comment={comment} comments={this.props.comments} shift={this.props.shift + 1} openCommentForm={this.props.openCommentForm} />);

    return (
      <section className="comments">
        { comments }
      </section>
    )
  }
}
