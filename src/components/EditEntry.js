import React, { Component } from 'react';
import './Task.css';
import DateTimePicker from 'react-datetime-picker';
import Deadline from './Deadline';

class EditEntry extends Component {



    state = {
        display: false, Subject: this.props.task.Subject, Description: this.props.task.Description,
        Category_Important: this.props.task.Category_Important,
        Category_Urgent: this.props.task.Category_Urgent, task: '', Done: this.props.task.Done,
        Date: this.props.task.Date, Deadline: this.props.task.Deadline, Task_Id: this.props.task.Task_Id,


    }


    subjectChanged = (e) => { this.setState({ Subject: e.target.value }); }
    descriptionChanged = (e) => { this.setState({ Description: e.target.value }); }
    urgentChanged = () => { this.setState({ Category_Urgent: !this.state.Category_Urgent }); }
    importantChanged = () => {
        this.setState({ Category_Important: !this.state.Category_Important });
    }
    handleDeadline = (e) => {
        console.log("EditEntryn HandleDeadline heräsi!");
        console.log(e);
        this.setState({ Deadline: e });
    }
    showEdit = () => {
        this.setState({
            task: this.props.task,
            display: !this.state.display,
            newSubject: this.props.task.Subject,
            newDescription: '',
            newCategory_Important: this.props.task.Category_Important,
            newCategory_Urgent: this.props.task.Category_Urgent,
            newDone: this.props.task.Done,
            Deadline: this.props.task.Deadline

        })
        if (this.props.task.Description != null) {
            this.setState({ newDescription: this.props.task.Description });
        }
        console.dir(this.props.task);
        console.dir(this.state);
    }

    editDetails = (e) => {
        console.dir(this.state.task);
        e.preventDefault();
        var updatedTask = this.state.task;
        updatedTask.Subject = this.state.Subject;
        updatedTask.Description = this.state.Description;
        updatedTask.Category_Important = this.state.Category_Important;
        updatedTask.Category_Urgent = this.state.Category_Urgent;
        updatedTask.Done = this.state.Done;
        updatedTask.Deadline = this.state.Deadline.toUTCString();
        console.dir(updatedTask);
        this.props.Edited(updatedTask);
        this.setState({ display: false });

    }

    render() {
        var showhide = this.state.display ? 'editShow' : 'editHide';
        var textImp = this.state.Category_Important ? 'IMPORTANT' : 'Important';
        var textUrg = this.state.Category_Urgent ? 'URGENT' : 'Urgent';

        var button = this.state.Category_Important ? 'imp' : 'nappi';
        var button2 = this.state.Category_Urgent ? 'urg' : 'nappi';


        return (
            <div>
                <div className="notdonebutton" onClick={this.showEdit}>Edit</div>
                <div className={showhide}>
                    <form>
                        {/* <input type="text" placeholder="Subject" value={this.state.Subject} onChange={this.subjectChanged} /> */}

                        <textarea className="teksti" placeholder="Subject" value={this.state.Subject} onChange={this.subjectChanged} />
                        <textarea className="teksti" placeholder="Description (optional)" value={this.state.Description} onChange={this.descriptionChanged} /><br />
                        <Deadline editDeadline={this.handleDeadline} task={this.props.task} />

                        <div onClick={this.importantChanged} className={button}>{textImp}</div>
                        <div onClick={this.urgentChanged} className={button2}>{textUrg}</div>

                        <input className="subm" type="submit" value="Submit" onClick={this.editDetails} /> <br />
                    </form >
                </div>
            </div>
        );
    }

}
export default EditEntry;