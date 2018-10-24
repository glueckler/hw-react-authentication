import React, { PureComponent } from 'react';
import requireAuth from './requireAuth'

class Feature extends PureComponent {
  render() {
    return (
      <div>Soup</div>
    );
  }
}

export default requireAuth(Feature)