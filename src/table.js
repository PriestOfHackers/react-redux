import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';



class Table1 extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         interval :''
      }
   }


 componentDidMount() {

   console.log("component did mount");
   
      let interval = this.props.interval;
   axios.get('http://localhost:8080/',
    {params: {interval: this.props.interval}},
    {headers: { "Content-Type": "application/json;charset=UTF-8"}
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

   }
 
 render() {

   this.componentDidMount();
   let resultTable;

   if(this.props.canShow){
      resultTable =
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
      </Table>;
   }
   else{

      resultTable = "";
   }

   
    return (
       <div>
         {resultTable}
         </div>
    )
 }   
 
 }

export default Table1;