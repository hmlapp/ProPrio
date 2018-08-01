import React, { Component } from 'react';
import './Task.css';
import Details from './Details';


class Task extends Component {
    state = { kiireellisyys: "normal", important: "normal", };
    done = () => {
        this.props.Done(this.props.task.Task_Id);
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
                    <div> {this.props.task.Subject}  {this.props.task.Deadline}
                        <input type="checkbox" checked={this.Done} />
                    </div>
                    <span className={this.state.kiireellisyys}> {this.props.task.Category_Urgent} </span>
                    <span className={this.state.important}>{this.props.task.Category_Important} </span>
                    <span className="done"> {this.props.task.Done}</span>
                </div>
            </form>
        );
    }
}
export default Task