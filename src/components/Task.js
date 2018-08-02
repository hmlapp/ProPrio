import React, { Component } from 'react';
import './Task.css';
import Details from './Details';
import DoneButton from './DoneButton';
import EditEntry from './EditEntry';


class Task extends Component {

    state = {
        kiireellisyys: "normal",
        important: "normal",
        updatedTask: 'updatedTask',
    }
    handleDone = (value) => {
        this.setState(this.state.updatedTask = this.props.task);
        var dummyDone = { ...this.state.updatedTask };
        dummyDone.Done = value;
        this.props.editingID(dummyDone);

    }
    handleEdit = (value) => {
        // console.dir(this.props.task);
        // this.setState(this.state.updatedTask = this.props.task);
        // console.dir(this.state.updatedTask);
        // var dummyEdit = { ...this.state.updatedTask };
        // dummyEdit = value;
        // console.dir(dummyEdit)

    }
    componentDidMount() {
        if (this.props.task.Category_Urgent) {
            this.setState({ kiireellisyys: "urgent" })
        }
        if (this.props.task.Category_Important) {
            this.setState({ important: "important" })
        }
    }


    render() {


        return (
            <form className="formi">
                <div className="task">
                    <DoneButton task={this.props.task} Done={this.handleDone} />
                    <div> {this.props.task.Subject}  {this.props.task.Deadline}
                    </div>
                    <span className={this.state.kiireellisyys}> {this.props.task.Category_Urgent} </span>
                    <span className={this.state.important}>{this.props.task.Category_Important} </span>
                    <EditEntry task={this.props.task} Done={this.handleEdit} />

                </div>
            </form>
        );
    }
}
export default Task