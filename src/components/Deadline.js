import React, { Component } from 'react';
import DateTimePicker from '../../node_modules/react-datetime-picker/dist/DateTimePicker';

class Deadline extends Component {

    state = { date: new Date() }
    componentDidMount() { this.setState({ date: this.props.Deadline }); }
    onChange = (e) => {
        console.log("onChange heräsi!");
        var date = e;
        this.setState({ date: e });
        console.dir(date)
        this.props.editDeadline(date);
    }
    render() {
        return (
            <div>
                <DateTimePicker onMouseOver={this.onChange} onChange={this.onChange} value={this.state.date} />
            </div>
        );
    }

}
export default Deadline;