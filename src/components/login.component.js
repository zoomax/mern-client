import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import CustomInput from './custom/custom-input.component'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../actions'
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'

class SignInComponent extends Component {
  constructor (props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.googleLogin = this.googleLogin.bind(this)
    this.facebookLogin = this.facebookLogin.bind(this)
  }
  async onSubmit (formData) {
    await this.props.signIn(formData)
    if (!this.props.errorMessage) {
      this.props.history.push('/dashboard')
    }
  }
  async googleLogin (res) {
    await this.props.oauthGoogle(res.tokenId)
    if (!this.props.errorMessage) {
      this.props.history.push('/dashboard')
    }
  }
  async facebookLogin (res) {
    await this.props.oauthFacebook(res.accessToken)
    if (!this.props.errorMessage) {
      this.props.history.push('/dashboard')
    }
  }
  render () {
    let { handleSubmit } = this.props
    return (
      <div className='row'>
        <div className='col'>
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <fieldset>
              <Field
                name='email'
                type='email'
                id='email'
                placeholder='Enter Email Please'
                label='Email'
                component={CustomInput}
              />
            </fieldset>
            {this.props.errorMessage && (
              <div className='alert alert-danger'>
                {this.props.errorMessage}
              </div>
            )}
            <fieldset>
              <Field
                name='password'
                type='password'
                id='password'
                placeholder='Enter Password Please'
                label='Password'
                component={CustomInput}
              />
            </fieldset>
            <div className='text-center form-group'>
              <button className='btn btn-primary pt-2 pb-2 pl-4 pr-4'>
                Sign in
              </button>
            </div>
          </form>
        </div>
        <div className='col'>
          <div className='text-center'>
            <div className='alert alert-primary'>
              Or you can use third-party library
            </div>
            <div>
              <FacebookLogin
                appId='295475781479762'
                autoLoad={false}
                textButton='Facebook'
                cssClass='btn btn-outline-primary'
                fields='name,email,picture'
                callback={this.facebookLogin}
              />
              <GoogleLogin
                clientId='620941968819-4olf9iic3l6efdgba5cag87nev0j53r4.apps.googleusercontent.com'
                buttonText='Google'
                onSuccess={this.googleLogin}
                onFailure={this.googleLogin}
                autoLoad={false}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
SignInComponent.defaultProps = {
  title: 'Sign in',
  password: null,
  email: null
}
function mapStateToProps (state) {
  return {
    errorMessage: state.auth.errorMessage
  }
}
export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signin' })
)(SignInComponent)
