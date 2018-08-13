import React, { Component } from 'react';

class Details extends Component {
    render() {
        return (
            <div class="details">
                <ul>
                    <li>Subject: {this.prop.task.Subject}</li>
                    {/* <li>Description: {this.props.task.Description}</li>
                    <li>Created:{this.props.task.Date}</li>
                    <li>Deadline:{this.props.task.Deadline}</li> */}
                </ul>

            </div>

        )
    }
}
export default Details;