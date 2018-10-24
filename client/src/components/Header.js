import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Header extends PureComponent {
  render() {
    const authd = this.props.authenticated 
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '450px' }}>
          <Link to="/">App Home</Link>
        {!authd && (
          <Fragment>
            <Link to="/signin">Sign In</Link>
            <Link to="/signup">Sign Up</Link>
          </Fragment>
        )}
        {authd && (
          <Fragment>
            <Link to="/feature">Secret Feature</Link>
            <Link to="/signout">Sign Out</Link>
          </Fragment>
        )}
      </div>
    );
  }
}

const mapState = state => {
  return {
    authenticated: state.auth.authenticated,
  }
}

export default connect(mapState)(Header)