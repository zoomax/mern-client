import React, { Component } from 'react' // must be imported wherever a jsx format is used
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'
class HeaderComponent extends Component {
  constructor (props) {
    super(props)
    this.signOut = this.signOut.bind(this)
  }
  signOut () {
    this.props.signOut()
  }
  render () {
    return (
      <div className='mb-5'>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
          <div className='navbar-brand'></div>
          {this.props.isAuthenticated && (
            <NavLink
              className='nav-link'
              to='/dashboard'
              exact={true}
              activeClassName='active'
            >
              AuthApp
            </NavLink>
          )}
          {!this.props.isAuthenticated && (
            <NavLink
              className='nav-link'
              to='/login'
              exact={true}
              activeClassName='active'
            >
              AuthApp
            </NavLink>
          )}

          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav mr-auto'>
              {this.props.isAuthenticated && (
                <li className='nav-item active'>
                  <NavLink
                    className='nav-link'
                    to='/dashboard'
                    exact={true}
                    activeClassName='active'
                  >
                    Dashboard
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
          <ul className='navbar-nav mr-auto'>
            {!this.props.isAuthenticated && (
              <li className='nav-item active'>
                <NavLink
                  className='nav-link'
                  to='/login'
                  exact={true}
                  activeClassName='active'
                >
                  Login
                </NavLink>
              </li>
            )}

            {!this.props.isAuthenticated && (
              <li className='nav-item active'>
                <NavLink
                  className='nav-link'
                  to='/sign-up'
                  exact={true}
                  activeClassName='active'
                >
                  Sign up
                </NavLink>
              </li>
            )}

            {this.props.isAuthenticated && (
              <li className='nav-item active'>
                <NavLink
                  className='nav-link'
                  to='/login'
                  exact={true}
                  activeClassName='active'
                  onClick={this.signOut}
                >
                  Logout
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}
export default connect(mapStateToProps, actions)(HeaderComponent)
