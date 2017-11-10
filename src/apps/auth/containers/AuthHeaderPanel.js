import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import UserHeaderPanel from '../components/UserHeaderPanel';
import AuthDialog from '../components/AuthDialog';

export class AuthHeaderPanel extends Component {
  componentDidMount() {
    this.props.actions.getCurrentUser();
  }

  render() {
    return (
      <div>
        <UserHeaderPanel {...this.props}/>
        <AuthDialog isOpen={this.props.state.isOpenAuthDialog}
                    onRequestClose={this.props.actions.closeAuthDialog}
                    login={this.props.actions.login}
                    registration={this.props.actions.registration} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {state: state.auth};
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthHeaderPanel);
