import React, { Component } from 'react'
import { connect } from 'react-redux'

export default ChildComponent =>  {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.shouldNavAway()
    }

    componentDidUpdate() {
      this.shouldNavAway()
    }

    shouldNavAway() {
      if (!this.props.auth) {
        this.props.history.push('/')
      }
    }

    render () {
      return (
        <ChildComponent {...this.props} />
      )
    }
  }

  const mapState = state => ({
    auth: state.auth.authenticated
  })
  return connect(mapState)(ComposedComponent)
};


