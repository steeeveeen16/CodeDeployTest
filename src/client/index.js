import React from 'react'
import ReactDOM from 'react-dom'
import Welcome from './Welcome'
import 'babel-polyfill'

import './style.css'

ReactDOM.render(
  <Welcome />,
  document.getElementById('content')
)

if (module.hot) {
  module.hot.accept()
}