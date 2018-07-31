import React, {Component}from 'react';

class Task extends Component{
render(){
    return (
        <li>
        <div className="task">
         <div>Tasks</div>
         <p className="subject" >{this.props.task.subject}</p>
         <p className="description">{this.props.task.description}</p>
         <p className="location">{this.props.task.location}</p>
        <p className="date">{this.props.task.date}</p>
        <p className="deadline">{this.props.task.deadline}</p>
        <p className="category_urgent">{this.props.task.category_urgent}</p>
        <p className="category_important">{this.props.task.category_important}</p>
        <p className="photo">{this.props.task.photo}</p>
        <p className="task_id">{this.props.task.task_id}</p>
        <p className="user_id">{this.props.task.user_id}</p>
        </div>
        </li>
    );
}
}
export default Task;