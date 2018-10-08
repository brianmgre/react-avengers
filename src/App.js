import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      avengers: [ 'Iron Man', 'Thor', 'Ant-Man', 'Wasp', 'Hulk']
    };
  }




  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.avengers.map(avenger => 
            <div key={avenger}>{avenger}</div>)}
          
        
        </header>
      </div>
    );
  }
}

export default App;