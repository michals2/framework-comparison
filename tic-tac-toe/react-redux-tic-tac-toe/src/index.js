import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ticTacToe from './model/reducers'
import App from './components/App'
 
let store = createStore(ticTacToe)
 
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)