import React, { Component } from 'react';
import { AUTHORIZED } from '../../constants';

const LoginView = (props) => <button className='header__content__login_button' onClick={props.openAuthDialog}>Войти</button>

const UserView = (props) => (
  <div className="user_view">
    <span className="user_view__username">{props.state.username}</span>
    <div>
      <p onClick={props.actions.logout} className="user_view__menu_item">Выйти</p>
    </div>
  </div>);

export default class UserHeaderPanel extends Component {
  render() {
    return this.props.state.status === AUTHORIZED ? <UserView {...this.props} /> : <LoginView openAuthDialog={this.props.actions.openAuthDialog}/>;
  }
}
