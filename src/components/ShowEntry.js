import React, { Component } from 'react';
import Task from './Task';
import './ShowEntry.css'

class ShowEntries extends Component {
    render() {
        var tasked = this.props.tasks.map(function (task) {
            return (<Task task={task} key={task.Task_Id} deadline={task.Deadline} editingID={this.props.editingID} />);
        }.bind(this));
      

        return (

            <div className="ShowEntries">
                {tasked}
            </div>
        );
    }
}

// renderTableHeaders() {
//     let headers = [];
//     for (let i = 0; i < this.state.selectedColumns.length; i++) {
//       let col = this.state.selectedColumns[i];
//       headers.push(<th key={col} style={{backgroundColor: '#177CB8', 
//                    color: 'white', 
//                    border: '1px solid grey', 
//                    borderCollapse: 'collapse', 
//                    padding: '5px'}}>{col}</th>)
//     }
//     return (<tr>{headers}<;/tr>);
//   }

// renderTableBody() {
//     let rows = [];
//     this.state.tableData.forEach(function(row) {
//       rows.push(
//         <tr key={btoa('row'+rows.length)}>
//           {this.state.selectedColumns.map(col =>
//             <td key={col} style={{border: '1px solid grey', 
//                                  borderCollapse: 'collapse', 
//                                  padding: '5px'}}>{row[col]}</td>
//           )}
//         </tr>
//       )
//     }.bind(this));
//     return (&lt;tbody>{rows}</tbody>);
//   }

export default ShowEntries;