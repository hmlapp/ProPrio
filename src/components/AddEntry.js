import React, { Component } from 'react';
import ShowEntry from './ShowEntry';
import Task from './Task';
// import DateTime from 'react-datetime';
import './AddEntry.css';
import Details from './Details';




class AddEntry extends Component {
    state = { Subject: '', Description: '', Category_Important: false, Category_Urgent: false, Done: false }
    subjectChanged = (e) => { this.setState({ Subject: e.target.value }); }
    descriptionChanged = (e) => { this.setState({ Description: e.target.value }); }
    urgentChanged = () => { this.setState({ Category_Urgent: !this.state.Category_Urgent }); }
    importantChanged = () => {
        this.setState({ Category_Important: !this.state.Category_Important });
    }
    createTask = (e) => {
        e.preventDefault();
        this.props.newEntry(this.state);
        this.setState({ Subject: '', Description: '', Category_Important: false, Category_Urgent: false, Done: false })
    }

    render() {
        var textImp = this.state.Category_Important ? 'IMPORTANT' : 'Important';
        var textUrg = this.state.Category_Urgent ? 'URGENT' : 'Urgent';

        var button = this.state.Category_Important ? 'imp' : 'nappi'
        var button2 = this.state.Category_Urgent ? 'urg' : 'nappi'
        return (
            <form>
                {/* <input type="text" placeholder="Subject" value={this.state.Subject} onChange={this.subjectChanged} /> */}
                <label>
                    <textarea className="teksti" placeholder="Subject" value={this.state.Subject} onChange={this.subjectChanged} />
                    <textarea className="teksti" placeholder="Description (optional)" value={this.state.Description} onChange={this.descriptionChanged} />
                </label>
                <span className="important"></span>
                <div onClick={this.importantChanged} className={button}>{textImp}</div>
                <div onClick={this.urgentChanged} className={button2}>{textUrg}</div>

                <input className="subm" type="submit" value="Submit" onClick={this.createTask} /> <br />
            </form >
        )
    }
}



export default AddEntry;

