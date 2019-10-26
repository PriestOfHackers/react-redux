import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table1 from './table.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repourl : '',
      timespan : '',
      name: '',
      canShow:false,
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

    this.setState({canShow: true});

    event.preventDefault();
  }

  render() {

    let styles = {
      
       margin: 'auto',
       width: '50%',
       padding: '10px',
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
                <option value="24hours">24 hours</option>
                <option value="week">last week</option>
                <option value="month">last month</option>
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
      <Table1 canShow={this.state.canShow} interval={this.state.timespan}></Table1>
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