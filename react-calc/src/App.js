import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Results from './components/Results';
import Keypad from './components/Keypad'

class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Results />
        <Keypad />
      </div>
    )
  }
}

export default App;
