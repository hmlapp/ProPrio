import React, { Component } from 'react';
import './Task.css';

class DoneButton extends Component {

    state = { newDone: this.props.task.Done }


    valmisChanged = () => {
        this.setState({ newDone: this.props.task.Done });
        var updatedDone = !this.state.newDone;
        this.setState({ newDone: updatedDone });
        this.props.Done(updatedDone);
    }

    render() {
        var donebutton = this.state.newDone ? 'donebutton' : 'notdonebutton';
        return (
            <div className={donebutton} onClick={this.valmisChanged}>Done</div>
        );
    }

}
export default DoneButton;