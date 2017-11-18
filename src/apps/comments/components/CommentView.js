import React, { Component } from 'react';
import { getFormatDate } from '../../../utils/datetime';
import CommentsView from './CommentsView';

export default class CommentView extends Component {
  openCommentDialog = () => {
    this.props.openCommentForm(this.props.comment.url);
  }

  render() {
    const shiftStyle = {marginLeft: `{this.props.shift}rem`};
    return (
      <div style={ shiftStyle }>
        <div className="comments__comment">
          <div>{ this.props.comment.owner.username }</div>
          <div>{this.props.comment.content }</div>
          <footer className="commetns__comment__footer">
            <span className="post_view__footer__publication_date">{ getFormatDate(this.props.comment.publication_date) }</span>
            <input type="button" value="Ответить" className="auth_form__footer__link_button" onClick={this.openCommentDialog} />
          </footer>
        </div>
        <CommentsView comments={ this.props.comments } parent={ this.props.comment.url } shift={ this.props.shift } openCommentForm={this.props.openCommentForm} />
      </div>
    );
  }
}
