import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

console.json = (...rest) => {
  console.log(JSON.stringify(rest, null, 2))
}

function render() {
  ReactDOM.render(<App />, document.querySelector('#root'))
}

render()
