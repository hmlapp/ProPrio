import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddEntry from './components/AddEntry';
import ShowEntries from './components/ShowEntry';
import { getList, addTask, deleteTask, updateTask } from './serviceclient'
import Categories from './components/Categories';

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
          ProPrio on työkalu ToDo-listojen tekoon!
      </p>
        <AddEntry newEntry={this.insertEntry} /> <br />
<<<<<<< HEAD
        <ShowEntries tasks={this.state.tasks} editingID={this.updateEntry} />
        <Categories/>
=======
        <ShowEntries tasks={this.state.tasks} editingID={this.updateEntry} deleteID={this.deleteEntry} />

>>>>>>> fetch_head
      </div >
    );
  }
}

export default App;
