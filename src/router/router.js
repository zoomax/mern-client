import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomeComponent from '../components/home.component'
import HeaderComponent from '../components/header.component'
import SigninComponent from '../components/login.component'
import SignupComponent from '../components/signup.component'

const AppRouter = props => {
  return (
    <BrowserRouter>
      <HeaderComponent></HeaderComponent>
      <div className='container'>
        <Switch>
          <Route exact={true} path='/dashboard' component={HomeComponent} />
          <Route exact={true} path='/login' component={SigninComponent} />
          <Route exact={true} path='/sign-up' component={SignupComponent} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default AppRouter
