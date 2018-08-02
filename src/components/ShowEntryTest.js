import React, { Component } from 'react';
import TaskTest from './TaskTest';
import './ShowEntry.css'
import Flexbox from 'flexbox-react';

class ShowEntriesTest extends Component {
    render() {
        var tasked = this.props.tasks.map(function (task) {
            return (<TaskTest task={task} key={task.Task_Id} deadline={task.Deadline} editingID={this.props.editingID} deleteID={this.props.deleteID} />);
        }.bind(this));


        return (
            <div>
                <Flexbox className="ulko_container">
                    <Flexbox className="header1">
                        <Flexbox className="item">
                            Category
                         </Flexbox>
                        <Flexbox className="item">
                            Done
                        </Flexbox>

                        <Flexbox className="item">
                            Subject
                         </Flexbox>
                        <Flexbox className="item">
                            Description
                         </Flexbox>
                        <Flexbox className="item">
                            Deadline
                        </Flexbox>
                        <Flexbox className="item">
                            Delete
                         </Flexbox>
                        <Flexbox className="item">
                            Edit
                         </Flexbox>
                    </Flexbox>
                    <div className="ShowEntries">
                        {tasked}
                    </div>
                </Flexbox>
            </div>
        );
    }
}


export default ShowEntriesTest;