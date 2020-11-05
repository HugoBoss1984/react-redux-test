import logo from './cicloApp.jpg';
import './App.css';

import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {incrementa, accedi} from './actions'

function App() {
  const counter = useSelector(state => state.counter)
  const logged = useSelector(state => state.logged)
  const dispatch = useDispatch()

  console.log(counter)
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(incrementa())}>Aumenta</button>
      {logged ? <h2>Sei loggato</h2> : <h2>Vedi di loggarti, abusivo</h2>}
      <button onClick={() => dispatch(accedi())}>Login</button>
      <hr />
      <img src={logo} alt="ciclo app" />
    </div>
  );
}

export default App;
