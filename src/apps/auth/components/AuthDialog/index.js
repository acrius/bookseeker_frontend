import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { LOGIN_FORM, REGISTRATION_FORM } from '../../constants';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
  }

  changeUsername = (event) => {
    this.setState({username: event.target.value});
  }

  changePassword = (event) => {
    this.setState({password: event.target.value});
  }

  login = (event) => {
    this.props.login(this.state);
  }

  render() {
    return (
      <form>
        <header>
          <h3>Введите Ваши учетные данные:</h3>
        </header>
        <main>
          <div className="auth_form__row">
            <label htmlFor="username">Пользователь:</label>
            <input type="text" name="username" value={this.state.username} onChange={this.changeUsername} />
          </div>
          <div className="auth_form__row">
            <label htmlFor="password">Пароль:</label>
            <input type="password" name="password" value={this.state.password} onChange={this.changePassword} />
          </div>
        </main>
        <footer>
          <input type="button" value="Зарегистрироваться" onClick={this.props.openRegisrationForm}/>
          <input type="button" value="Войти" onClick={this.login} />
        </footer>
      </form>
    );
  }
}

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'username': '',
      'password1': '',
      'password2': '',
      'email': ''
    };
  }

  changeUsername = (event) => {
    this.setState({'username': event.target.value});
  }

  changePassword1 = (event) => {
    this.setState({'password1': event.target.value});
  }

  changePassword2 = (event) => {
    this.setState({'password2': event.target.value});
  }

  changeEmail = (event) => {
    this.setState({'email': event.target.value});
  }

  registration = () => {
    this.props.registration(this.state);
  }

  render() {
    return (
      <form>
        <header>
          <h3>Введите Ваши учетные данные:</h3>
        </header>
        <main>
          <div className="auth_form__row">
            <label htmlFor="username">Пользователь:</label>
            <input type="text" name="username" value={this.state.username} onChange={this.changeUsername} />
          </div>
          <div className="auth_form__row">
            <label htmlFor="password1">Пароль:</label>
            <input type="password" name="password1" value={this.state.password1} onChange={this.changePassword1} />
          </div>
          <div className="auth_form__row">
            <label htmlFor="password2">Повторите пароль:</label>
            <input type="password" name="password2" value={this.state.password2} onChange={this.changePassword2} />
          </div>
          <div className="auth_form__row">
            <label htmlFor="email">Почта:</label>
            <input type="email" name="email" value={this.state.email} onChange={this.changeEmail} />
          </div>
        </main>
        <footer>
          <input type="button" value="Войти" onClick={this.props.openLoginForm}/>
          <input type="button" className="" value="Зарегистрироваться" onClick={this.registration} />
        </footer>
      </form>
    );
  }
}

export default class AuthDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'formType': LOGIN_FORM
    };
  }

  openRegisrationForm = () => {
    console.log('Register');
    this.setState({'formType': REGISTRATION_FORM});
  }

  openLoginForm = () => {
    this.setState({'formType': LOGIN_FORM});
  }

  render() {
    const contentForm = this.state.formType === LOGIN_FORM ?
                          <LoginForm login={this.props.login}
                            openRegisrationForm={this.openRegisrationForm} />
                          : <RegistrationForm registration={this.props.registration}
                              openLoginForm={this.openLoginForm} />;

    return (
      <ReactModal
        className="auth_form"
        overlayClassName="auth_form_overlay"
        isOpen={this.props.isOpen}
        contentLabel="Auth dialog"
        onRequestClose={this.props.onRequestClose}>
          {contentForm}
      </ReactModal>
    );
  }
}
