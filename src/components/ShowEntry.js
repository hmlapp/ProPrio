import React, { Component } from 'react';
import Task from './Task';
import './ShowEntry.css'

class ShowEntries extends Component {
    render() {
        var tasked = this.props.tasks.map(function (task) {
<<<<<<< HEAD
            return (<Task task={task} key={task.Task_Id} deadline={task.Deadline} editingID={this.props.editingID} />);
=======
            return (<Task task={task} key={task.Task_Id} deadline={task.Deadline} editingID={this.props.editingID} deleteID={this.props.deleteID} />);
>>>>>>> fetch_head
        }.bind(this));


        return (

            <div className="ShowEntries">
                {tasked}
            </div>
        );
    }
}


export default ShowEntries;