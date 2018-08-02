import React, { Component } from 'react';
import './Task.css';
import Details from './Details';
import DoneButton from './DoneButton';
import EditEntry from './EditEntry';
import Flexbox from 'flexbox-react';

class TaskTest extends Component {

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
        this.setState(this.state.updatedTask = this.props.task);
        console.dir(this.state.updatedTask);
        this.props.editingID(value);
    }

    handleDelete = (e) => {
        this.props.deleteID(this.props.task.Task_Id);
    }

    componentDidMount() {
        if (this.props.task.Category_Urgent) {
            this.setState({ kiireellisyys: "urgent" })
        }
        if (this.props.task.Category_Important) {
            this.setState({ important: "important" })
        }

    }
    componentWillReceiveProps(newProps) {
        if (newProps.task.Category_Urgent) {
            this.setState({ kiireellisyys: "urgent" })
        } else {
            this.setState({ kiireellisyys: "normal" })
        }
        if (newProps.task.Category_Important) {
            this.setState({ important: "important" })
        } else {
            this.setState({ important: "normal" })
        }

    }





    render() {
        // var nabu = this.state.Done ? 'redi' : 'nappi';
        var flexClass;
        if (this.state.kiireellisyys == 'urgent' && this.state.important == 'important') {
            flexClass = 'imp_urg_container';
        }
        else if (this.state.kiireellisyys == 'normal' && this.state.important == 'important') {
            flexClass = 'important_container';
        }
        else if (this.state.kiireellisyys == 'urgent' && this.state.important == 'normal') {
            flexClass = 'urgent_container';
        }
        else if (this.state.kiireellisyys == 'normal' && this.state.important == 'normal') {
            flexClass = 'none_container';
        }
        return (

            <div className="formi">
                <div className="task">


                    <Flexbox className={flexClass} flexGrow={1}>
                        <Flexbox className="sisa_container">
                            <Flexbox className="item">
                                <span className={this.state.kiireellisyys}> {this.props.task.Category_Urgent} </span>
                                <span className={this.state.important}>{this.props.task.Category_Important} </span>
                            </Flexbox>
                            <Flexbox className="item">
                                <DoneButton task={this.props.task} Done={this.handleDone} />
                            </Flexbox>
                            <Flexbox className="item">
                                <div> {this.props.task.Subject}</div>
                            </Flexbox>
                            <Flexbox className="item">
                                <div>{this.props.task.Description}</div>
                            </Flexbox>
                            <Flexbox className="item">
                                <div>{this.props.task.Deadline}</div>
                            </Flexbox>
                            <Flexbox className="item">
                                <div className='notdonebutton' onClick={this.handleDelete}>Delete</div>
                            </Flexbox>
                            <Flexbox className="item">
                                <EditEntry task={this.props.task} Edited={this.handleEdit} />
                            </Flexbox>
                        </Flexbox>
                    </Flexbox>
                </div>
            </div>
        );
    }
}
export default TaskTest