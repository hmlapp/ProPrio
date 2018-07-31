import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddEntry from './components/AddEntry';
import ShowEntries from './components/ShowEntry';
import { getList, addTask } from './serviceclient'

class App extends Component {
  state = { tasks: [], msg: 'Retrieving tasks...' }

  // componentDidMount() { this.getUpdatedList(); }
  // componentDidUpdate() { this.getUpdatedList(); }

  getUpdatedList = () => {
    getList(
      function callback(list) { this.setState({ tasks: list, msg: null }); }.bind(this)
    );
  }

  render() {
    return (
      <div className="App">
        <p>
          <AddEntry insertEntry={this.newEntry} /> <br />
          <ShowEntries />
        </p>
      </div >
    );
  }
}

export default App;
