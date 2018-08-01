import React, { Component } from 'react';
import './Task.css';
import './App.css';
class Task extends Component {
    done = () => {
        this.props.Done(this.props.task.Task_Id);
    }
    render() {
        return (
            <div className="task">
                <div> {this.props.task.Subject}  {this.props.task.Deadline}
                    <input type="checkbox" onClick={this.Done} />
                </div>
                <p id="urgent"> {this.props.task.Category_Urgent}</p>
                <p id="important">{this.props.task.Category_Important}</p>
                <p id="done"> {this.props.task.Done}</p>

            </div>
        );
    }
}
export default Task