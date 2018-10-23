import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import App from './components/App'
import Welcome from './components/Welcome'
import SignUp from './components/auth/SignUp'

ReactDom.render((
  <BrowserRouter>
    <App>
      <Route path="/" exact component={Welcome} />
      <Route path="/signup" exact component={SignUp} />
    </App>
  </BrowserRouter>
), 
document.querySelector('#root'))