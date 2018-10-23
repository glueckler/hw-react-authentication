import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'

class Header extends PureComponent {
  render() {
    return (
      <div>
        <Link to="/">App Home</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/signout">Sign Out</Link>
        <Link to="/feature">Secret Feature</Link>
      </div>
    );
  }
}

export default Header