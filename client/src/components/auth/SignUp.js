import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form'

class SignUp extends PureComponent {
  render() {
    return (
      <form>
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
      </form>
    );
  }
}

export default reduxForm({ form: 'signup' })(SignUp)