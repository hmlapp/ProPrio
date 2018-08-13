import React, { Component } from 'react';
import './Categories.css';
import Flexbox from 'flexbox-react';
import Task from './Task';
import ShowEntries from './ShowEntry';
import './ShowEntry.css';


class Categories extends Component {
  render() {
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
      
 
      <Flexbox className="imp_urg_container">
          <Flexbox className="sisa_container">
          <Flexbox className="item">
            Pööpöö
          </Flexbox><br/>
          <Flexbox className="item">
            Tähän checkbox
          </Flexbox><br/>
          <Flexbox className="item">
            Silitä sukat
          </Flexbox><br/>
          <Flexbox className="item">
            Sukkien pitää olla sileät ja rypyttömät, joten silitä ne.
          </Flexbox><br/>
          <Flexbox className="item">
            31.8.2018
          </Flexbox><br/>
          <Flexbox className="item">
            Tästä voi poistaa
          </Flexbox><br/>
          <Flexbox className="item">
            Tästä voi muokata
          </Flexbox><br/>
        </Flexbox>
        <Flexbox className="sisa_container">
          <Flexbox className="item">
            Urgent
          </Flexbox>
          <Flexbox className="item">
            Done
          </Flexbox>
          <Flexbox className="item">
            Tee koodaustehtävät
          </Flexbox>
          <Flexbox className="item">
            Tee kotitehtävät, joita on annettu viikkojen mittaan. Tutustu aihealueisiin ja yritä oppia jotain.
          </Flexbox>
          <Flexbox className="item">
            15.8.2018
          </Flexbox>
          <Flexbox className="item">
            Tästä voi poistaa
          </Flexbox>
          <Flexbox className="item">
            Tästä voi muokata
          </Flexbox>
    </Flexbox>
</Flexbox>
 
<Flexbox className="important_container" flexGrow={1}>
    <Flexbox className="sisa_container">
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
</Flexbox>

<Flexbox className="urgent_container" flexGrow={1}>
    <Flexbox className="sisa_container">
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
</Flexbox>

<Flexbox className="none_container" flexGrow={1}>
    <Flexbox className="sisa_container">
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
</Flexbox>

<Flexbox className="done_container" flexGrow={1}>
    <Flexbox className="sisa_container">
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
</Flexbox>
</Flexbox>

      </div>
    );
  }
}

export default Categories;
