import React, { Component } from 'react' // (React) must be imported wherever a jsx format is used
import { Provider } from 'react-redux'
import AppRouter from './router/router'
import StateStore from './redux/stateStore'
import axios from 'axios'

import 'normalize.css/normalize.css'
// import './App.scss'
let token = localStorage.getItem('TOKEN')
axios.defaults.headers.common['authorization'] = token
class App extends Component {
  render () {
    return (
      <div>
        <Provider store={StateStore()}>
          <AppRouter></AppRouter>
        </Provider>
      </div>
    )
  }
}
export default App
