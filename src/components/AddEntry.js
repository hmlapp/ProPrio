import React, { Component } from 'react';
import ShowEntry from './ShowEntry';
import Task from './Task';
// import DateTime from 'react-datetime';
import './AddEntry.css';



class AddEntry extends Component {
    state = { Subject: '', Description: '', Category_Important: false, Category_Urgent: false, Done: false }
    subjectChanged = (e) => { this.setState({ Subject: e.target.value }); }
    descriptionChanged = (e) => { this.setState({ Description: e.target.value }); }
    importantChanged = (e) => { this.setState({ Category_Important: e.target.value }); }
    urgentChanged = (e) => { this.setState({ Category_Urgent: e.target.value }); }


    render() {
        return (
            <form>
                <input type="text" placeholder="Subject" value={this.state.Subject} onChange={this.subjectChanged} />
                <label>
                    <textarea placeholder="Description (optional)" value={this.state.Description} onChange={this.descriptionChanged} />
                </label>

                <label>
                    Important:
                    <input
                        name="important"
                        type="checkbox"
                        checked={this.state.Category_Important}
                        onChange={this.importantChanged} />
                </label>
                <label>
                    Urgent:
                    <input
                        name="urgent"
                        type="checkbox"
                        checked={this.state.Category_Urgent}
                        onChange={this.urgentChanged} />
                </label>
                <input type="submit" value="Submit" /><br />

            </form>
        )
    }
}



export default AddEntry;

