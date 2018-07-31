import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  AddEntry  from './components/AddEntry';
import ShowEntries  from './components/ShowEntry';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <AddEntry/> <br />
          <ShowEntries/>
        </p>
      </div>
    );
  }
}

export default App;
