/*
action generators => are functions that returns an action-object or a function upon which we can change 
                     the state of our app. 
the procees that redux  follows to perform operations on redux-state-store

=> 1) call Action-Generator 
=> 2) create/return an action/function 
=> 3) dispatch the action/function 
=> 4) middleware (to perform operations before passing an action to the reducer) 
=> 5) modifying the state of the app according to the action passed to the reducer

*/

import axios from 'axios'
import {
  AUTH_SIGN_UP,
  AUTH_SIGN_UP_ERROR,
  AUTH_SIGN_OUT,
  AUTH_SIGN_IN,
  AUTH_SIGN_IN_ERROR,
  GET_SECRET
} from './action.types'
export const oauthGoogle = token => {
  return async dispatch => {
    const response = await axios.post(
      'http://localhost:5000/users/oauth/google',
      { tokenId: token }
    )
    if (response.data.token) {
      dispatch({
        type: AUTH_SIGN_UP,
        payload: response.data.token
      })

      localStorage.setItem('TOKEN', response.data.token)
    } else {
      dispatch({
        type: AUTH_SIGN_UP_ERROR,
        payload: "you're not authenticated"
      })
    }
  }
}
export const oauthFacebook = token => {
  return async dispatch => {
    const response = await axios.post(
      'http://localhost:5000/users/oauth/facebook',
      {
        access_token: token
      }
    )
    if (response.data.token) {
      dispatch({
        type: AUTH_SIGN_UP,
        payload: response.data.token
      })

      localStorage.setItem('TOKEN', response.data.token)
    } else {
      dispatch({
        type: AUTH_SIGN_UP_ERROR,
        payload: "you're not authenticated"
      })
    }
  }
}

export const signUp = data => {
  /*
this function is an action-generator
=> the functionality of this genrator is to 
Step-1) => use data and make an Http request to the our backend and send the data to the server
Step-2) => recieve the response-data (jwt) from our backend and dispatch it to our reducer
Step-3) => save the reasponse token to localStorage in order to be accessed even after app reloading  
*/

  return async dispatch => {
    try {
      const response = await axios.post(
        'http://localhost:5000/users/signup',
        data
      )
      console.log(response)
      dispatch({
        type: AUTH_SIGN_UP,
        payload: response.data.token
      })
      localStorage.setItem('TOKEN', response.data.token)
    } catch (err) {
      console.log(err.message)
      dispatch({
        type: AUTH_SIGN_UP_ERROR,
        payload: 'Email is already in use'
      })
    }
  }
}
export const signIn = data => {
  /*
this function is an action-generator
=> the functionality of this genrator is to 
Step-1) => use data and make an Http request to the our backend and send the data to the server
Step-2) => recieve the response-data (jwt) from our backend and dispatch it to our reducer
Step-3) => save the reasponse token to localStorage in order to be accessed even after app reloading  
*/

  return async dispatch => {
    try {
      const response = await axios.post(
        'http://localhost:5000/users/signin',
        data
      )
      console.log(response)
      dispatch({
        type: AUTH_SIGN_IN,
        payload: response.data.token
      })
      localStorage.setItem('TOKEN', response.data.token)
    } catch (err) {
      console.log(err.message)
      dispatch({
        type: AUTH_SIGN_IN_ERROR,
        payload: 'email or password are not correct'
      })
    }
  }
}

export const signOut = () => {
  return dispatch => {
    localStorage.setItem('TOKEN', '')
    dispatch({
      type: AUTH_SIGN_OUT,
      payload: ''
    })
  }
}

export const getSecret = () => {
  return async dispatch => {
    try {
      const response = await axios.get('http://localhost:5000/users/secret')
      dispatch({
        type: GET_SECRET,
        payload: response.data.data
      })
    } catch (error) {
      console.log(error.message)
    }
  }
}
