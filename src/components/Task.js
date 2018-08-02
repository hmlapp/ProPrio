import React, { Component } from 'react';
import './Task.css';
import Details from './Details';
import DoneButton from './DoneButton';
import EditEntry from './EditEntry';


class Task extends Component {
<<<<<<< HEAD

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

=======
    state = { kiireellisyys: "normal", important: "normal", done: false };
    doneChanged=(e)=>{this.setState({Done: !this.setStateDone}); }
    createDone = (e) => {
        e.preventDefault();
        this.props.taskDone(this.state);
        this.setState({  Done: true })
>>>>>>> FETCH_HEAD
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
        // if (this.props.task.Done) {
        //     this.setState({ done: true })
        // } 
    }

        
    
    render()
     {
        var nabu = this.state.Done ? 'redi' : 'nappi';
        return (
        
            <form className="formi">
<<<<<<< HEAD
                <div className="task">
                    <DoneButton task={this.props.task} Done={this.handleDone} />
                    <div> {this.props.task.Subject}  {this.props.task.Deadline}
                    </div>
                    <span className={this.state.kiireellisyys}> {this.props.task.Category_Urgent} </span>
                    <span className={this.state.important}>{this.props.task.Category_Important} </span>
                    <EditEntry task={this.props.task} Done={this.handleEdit} />

=======
                <div className="task">                 
                    <div> {this.props.task.Subject}  {this.props.task.Deadline}  
                    <input className="nabu" type="submit" value="Done" onClick={this.doneChanged} /> <br />                
                    </div>
                    <span className={this.state.kiireellisyys}> {this.props.task.Category_Urgent} </span>
                    <span className={this.state.important}>{this.props.task.Category_Important} </span>
                    <span className={this.state.done} onClick={this.Done} ></span>               
>>>>>>> FETCH_HEAD
                </div>
            </form>
        );
    }
}
export default Task