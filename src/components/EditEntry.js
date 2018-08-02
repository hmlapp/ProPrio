import React, { Component } from 'react';
import './Task.css';

class EditEntry extends Component {

    state = { newDone: this.props.task.Done }
    componentDidMount() {
        console.dir(this.props.task.Subject + ':' + this.props.task.Done);
    }
    valmisChanged = () => {
        console.dir('*** this.props.task.done: ' + this.props.task.Done);
        this.setState({ newDone: this.props.task.Done });
        console.dir('alkuperäinen NewDone:' + this.state.newDone);
        var updatedDone = !this.state.newDone;
        this.setState({ newDone: updatedDone });
        console.dir('var updatedDone:' + updatedDone);
        console.dir('** Tässä kohtaa muuttuu newDone klikkauksesta ** ')
        this.props.Done(updatedDone);
    }

    render() {
        var donebutton = this.state.newDone ? 'donebutton' : 'notdonebutton';
        return (
            <div className={donebutton} onClick={this.valmisChanged}>Edit</div>
        );
    }

}
export default EditEntry;