import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form'


class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repourl : '',
      timespan : ''
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
    alert(this.state.repourl + " " +this.state.timespan);
    event.preventDefault();
  }


  render() {
    return (
<div>
<div>
<form onSubmit={this.handleSubmit}>

<Form.Group controlId="formHorizontalEmail">
    <Form.Label>
      Email
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="email" placeholder="Email" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Password
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="password" placeholder="Password" />
    </Col>
  </Form.Group>

        <label>
          Repo Url :
          <input type="text" value={this.state.repourl} onChange={this.handleRepoChange} />
        </label>
          <br />
        <label>
          Timespan :
        </label>
              <select onChange={this.handleTimespanChange}>
                <option value="24Hours">24 hours</option>
                <option value="lastweek">last week</option>
                <option value="lastmonth">last month</option>
              </select>
 
        <input type="submit" value="Submit" />
  <Button variant="primary" type="submit">
    Submit
  </Button>
      </form>
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
</div>
    );
  }
}

ReactDOM.render(
  <NameForm />,
   
  document.getElementById('root')

);

export default NameForm;