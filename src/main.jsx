import React from 'react'
import ReactDOM from 'react-dom/client'

import { legacy_createStore as createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  return (
    <div>
      <button onClick={e => store.dispatch({ type: 'GOOD' })}>Good</button> 
      <button onClick={e => store.dispatch({ type: 'OK' })}>Ok</button> 
      <button onClick={e => store.dispatch({ type: 'BAD' })}>Bad</button>
      <button onClick={e => store.dispatch({ type: 'ZERO' })}>Reset stats</button>
      <div>Good: {store.getState().good}</div>
      <div>Ok: {store.getState().ok}</div>
      <div>Bad: {store.getState().bad}</div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderApp = () => {
  root.render(<App />)
}

renderApp()
store.subscribe(renderApp)
