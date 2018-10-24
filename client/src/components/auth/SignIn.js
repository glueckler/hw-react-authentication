import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form'
import { compose } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../actions';

class SignIn extends PureComponent {
  onSubmit = (formProps) => {
    this.props.signin(formProps, () => {
      this.props.history.push('/feature')
    })
  }
  
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field 
            name="email" 
            type="text"
            component="input"
            autoComplete="none"
            />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field 
            name="password" 
            type="password"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <div>{this.props.errorMessage}</div>
        <button>Sign In!</button>
      </form>
    );
  }
}

const mapState = state => {
  return {
    errorMessage: state.auth.errorMessage,
  }
}

export default compose(
  connect(mapState, actions),
  reduxForm({ form: 'signin' })
)(SignIn)