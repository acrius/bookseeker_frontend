import React, { Component } from 'react';
import ReactModal from 'react-modal';

export default class CommentDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    };
  }

  sendComment = () => {
    this.props.postComment(this.state);
  }

  changeContent = (event) => {
    this.setState({content: event.target.value});
  }

  render(){
    return (
      <ReactModal
        className="auth_form"
        overlayClassName="auth_form_overlay"
        isOpen={this.props.isOpen}
        contentLabel="Auth dialog"
        onRequestClose={this.props.onRequestClose}>
        <form>
          <header>
            <h3>Введите комментарий</h3>
          </header>
          <main>
            <div className="auth_form__row">
              <label htmlFor="username">Комментарий:</label>
              <textarea rows="5" name="username" value={this.state.content} onChange={this.changeContent} />
            </div>
          </main>
          <footer className="auth_form__footer">
            <input className="auth_form__footer__main_button" type="button" value="Отправить" onClick={this.sendComment} />
          </footer>
        </form>
      </ReactModal>
    )
  }
}
