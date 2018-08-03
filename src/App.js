import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddEntry from './components/AddEntry';
import ShowEntries from './components/ShowEntry';
import ShowEntriesTest from './components/ShowEntryTest';
import { getList, addTask, deleteTask, updateTask } from './serviceclient'
import Categories from './components/Categories';
import './components/Categories.css';

class App extends Component {
  state = { tasks: [], msg: 'Retrieving tasks...' }

  componentDidMount() { this.getUpdatedList(); }


  getUpdatedList = () => {
    getList(
      function callback(list) { this.setState({ tasks: list, msg: null }); }.bind(this)
    );
    // console.dir(list);
  }
  insertEntry = (newTask) => {
    console.dir(newTask);
    addTask(newTask, function () { this.getUpdatedList(); }.bind(this));
  }

  updateEntry = (updatedTask) => {
    var updatedID = updatedTask.Task_Id;
    updateTask(updatedID, updatedTask, function () { this.getUpdatedList(); }.bind(this));
  }
  deleteEntry = (id) => {
    deleteTask(id).then(
      function (response) { this.getUpdatedList(); }.bind(this));

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">ProPrio</h1>
        </header>
        <p className="App-intro">
          To do or not to do?
      </p>
        <AddEntry newEntry={this.insertEntry} /> <br />
        <ShowEntriesTest tasks={this.state.tasks} editingID={this.updateEntry} deleteID={this.deleteEntry} />
      </div >
    );
  }
}

export default App;
