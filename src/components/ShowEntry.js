import React, { Component } from 'react';
import Task from './Task';

class ShowEntries extends Component{
    render() {
        var tasked=this.props.tasks.map(function(t){
            return (<Task task={t} key={t.id} />)
        })
    
    return (
         <table className= "ShowEntries">
            <tbody>
             {tasked}
             </tbody>
        </table>
        );
    }   
}

export default ShowEntries;