import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';



class Table1 extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         interval :'',
         data : null,
      }
   }


 componentDidMount() {
   
      let interval = this.props.interval;
   axios.get('http://localhost:8080/',
    {params: {interval: this.props.interval}},
    {headers: { "Content-Type": "application/json;charset=UTF-8"}
    })
    .then(function (response) {

        console.log(response.data.CommitCounts);
    })
    .catch(function (error) {
      console.log(error);
    });

   }
 
 render() {

   this.componentDidMount();
   let resultTable;

   if(this.props.canShow){
     if(this.props.interval === "24hours"){
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
          <td>paseka</td>
          <td>2</td>
        </tr>
        <tr>
          <td>trueadm</td>
          <td>3</td>
        </tr>
      </tbody>
      </Table>;
     }

     else if(this.props.interval === "week"){
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
          <td>acdlite </td>
          <td>2</td>
        </tr>
        <tr>
          <td>paseka</td>
          <td>2</td>
        </tr>
        <tr>
          <td>trueadm</td>
          <td>3</td>
        </tr>
      </tbody>
      </Table>;
     }

     else if(this.props.interval === "month"){

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
          <td>acdlite </td>
          <td>2</td>
        </tr>
        <tr>
          <td>paseka</td>
          <td>3</td>
        </tr>
        <tr>
          <td>trueadm</td>
          <td>3</td>
        </tr>
        <tr>
          <td>bvaughn</td>
          <td>2</td>
        </tr>
      </tbody>
      </Table>;

     }
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