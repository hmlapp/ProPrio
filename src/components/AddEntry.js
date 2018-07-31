import React, { Component } from 'react';



class AddEntry extends Component {
    state = { subject: '', description: '', important: false, urgent: false }
    subjectChanged = (e) => { this.setState({ subject: e.target.value }); }
    descriptionChanged = (e) => { this.setState({ description: e.target.value }); }
    importantChanged = (e) => { this.setState({ important: e.target.value }); }
    urgentChanged = (e) => { this.setState({ urgent: e.target.value }); }


    render() {
        return (
            <form>
                <input type="text" placeholder="Subject" value={this.state.subject} onChange={this.subjectChanged} /><br />
                <label>
                    <textarea placeholder="Description (optional)" value={this.state.description} onChange={this.descriptionChanged} />
                </label><br />
                <input type="submit" value="Submit" /><br />
                <label>
                    Important:
                    <input
                        name="important"
                        type="checkbox"
                        checked={this.state.important}
                        onChange={this.importantChanged} />
                </label> <br />
                <label>
                    Urgent:
                    <input
                        name="urgent"
                        type="checkbox"
                        checked={this.state.urgent}
                        onChange={this.urgentChanged} />
                </label> <br />

            </form>
        )
    }
}



export default AddEntry;