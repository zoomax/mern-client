import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
class HomeComponent extends Component {
  componentDidMount () {
    if (!this.props.isAuthenticated && !this.props.token) {
      this.props.history.push('/login')
    } else {
      this.props.getSecret()
    }
  }
  componentDidUpdate () {
    if (!this.props.isAuthenticated && !this.props.token) {
      this.props.history.push('/login')
    } else {
      this.props.getSecret()
    }
  }
  render () {
    return (
      <div>
        {this.props.title && (
          <p>
            welecom to our <strong>{this.props.secret}</strong> page
          </p>
        )}
      </div>
    )
  }
}
HomeComponent.defaultProps = {
  title: 'Home'
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token,
    secret: state.dash.secret
  }
}

export default connect(mapStateToProps, actions)(HomeComponent)
