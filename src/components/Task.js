import React, { Component } from 'react';
import './Task.css';
import Details from './Details';


class Task extends Component {
    state = { kiireellisyys: "normal", important: "normal", done: false };
    doneChanged=(e)=>{this.setState({Done: !this.setStateDone}); }
    createDone = (e) => {
        e.preventDefault();
        this.props.taskDone(this.state);
        this.setState({  Done: true })
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
                <div className="task">                 
                    <div> {this.props.task.Subject}  {this.props.task.Deadline}  
                    <input className="nabu" type="submit" value="Done" onClick={this.doneChanged} /> <br />                
                    </div>
                    <span className={this.state.kiireellisyys}> {this.props.task.Category_Urgent} </span>
                    <span className={this.state.important}>{this.props.task.Category_Important} </span>
                    <span className={this.state.done} onClick={this.Done} ></span>               
                </div>
            </form>
        );
    }
}
export default Task