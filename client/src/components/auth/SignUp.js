import React, { PureComponent } from 'react';

class SignUp extends PureComponent {
  render() {
    return (
      <form>
        <fieldset>
          <label>Email</label>
        </fieldset>
        <fieldset>
          <label>Password</label>
        </fieldset>
      </form>
    );
  }
}

export default SignUp