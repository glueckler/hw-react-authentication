import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions';

class SignOut extends PureComponent {

  componentDidMount() {
    this.props.signout()
  }
  
  render() {
    return (
      <div>Bye now you huligan</div>
    );
  }
}

export default connect(null, actions)(SignOut)