import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import GetCommits from './GetCommits.js';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repourl : '',
      timespan : '',
      name: '',
  };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleRepoChange = (event) => { 
    this.setState({repourl: event.target.value});
  }

  handleTimespanChange =(event) =>{
    this.setState({timespan: event.target.value});
  }

  handleSubmit(event) {
    //alert(this.state.repourl + " " +this.state.timespan);.

    console.log(this.state.repourl + " " +this.state.timespan);
    
    const interval = {
      timespan: this.state.timespan
    };

    axios.post(this.state.repourl, {  interval })
    .then(res => {
      console.log(res);
      console.log(res.data);
    })

    event.preventDefault();
  }


  render() {

    let styles = {
      width: '400px',
      height: '250px',
       justifyContent:'center', 
       alignItems:'center', 
       height: '100vh',
    };

    
    return (
<div style={styles}>
<div>
<Form  onSubmit={this.handleSubmit}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Repo Url :</Form.Label>
    <Form.Control value={this.state.repourl} onChange={this.handleRepoChange}/>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Timespan :</Form.Label>
    <Form.Control as="select" onChange={this.handleTimespanChange}>
                <option value="24Hours">24 hours</option>
                <option value="lastweek">last week</option>
                <option value="lastmonth">last month</option>
                </Form.Control>
 
  </Form.Group>
  <Form.Group>
  <Button type="submit" value="Submit">
    Submit
  </Button>
  </Form.Group>
  </Form>
</div>

<div>
<Table>
<thead>
  <tr>
    <th>Username</th>
    <th>Commmit count</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Mark</td>
    <td>Otto</td>
  </tr>
  <tr>
    <td>Jacob</td>
    <td>Thornton</td>
  </tr>
</tbody>
</Table>
</div>
 <div>
      <GetCommits>
      </GetCommits>
  </div>

</div>
    );
  }
}

ReactDOM.render(
  <NameForm />,
   
  document.getElementById('root')

);

export default NameForm;