import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Results from './components/Results';
import Keypad from './components/Keypad'
import { Button } from 'react-bootstrap'

class App extends React.Component {
  render () {


    return (
      <div>
        <div className='calc-body'>
          <Header />
          {/* <Results  /> */}
          <Keypad onClick={this.onClick}/>
        </div>
      </div>  
    )
  }
}

export default App;
