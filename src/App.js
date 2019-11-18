import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Results from './components/Results';
import Keypad from './components/Keypad'


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      result: ''
    }
  };

  onClick = button => {
    if (button === '='){
      this.calculate()
    } else if (button === 'clear') {
      this.reset()
    } else {  
      this.setState({
        result: this.state.result + button
      })
    }
  };

  calculate =()=>{
    this.setState({
      result: (eval(this.state.result) || "") + ""
    })
  }

  reset =()=> {
    this.setState({
      result: ''
    })
  }

  render () {
    return (
      <div>
        <div className='calc-body'>
          <Header />
          <Results result={this.state.result} />
          <Keypad onClick={this.onClick}/>
        </div>
      </div>  
    )
  }
}

export default App;
