import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import UserHeaderPanel from '../components/UserHeaderPanel';
import AuthDialog from '../components/AuthDialog';

export class ConfirmEmail extends Component {
  componentDidMount() {
    this.props.actions.confirmEmail(this.props.match.params.key);
  }

  render() {
    return (
      <div>
        { this.props.state.confirmMessage }
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

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmEmail);
