import React, { Component } from 'react'

class Table extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         students: [
            { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
            { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
            { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
            { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
         ]
      }
   }
 
   renderTableData() {
    return this.state.students.map((student, index) => {
       const { id, name, age, email } = student //destructuring
       return (
          <tr key={id}>
             <td>{id}</td>
             <td>{name}</td>
             <td>{age}</td>
             <td>{email}</td>
          </tr>
       )
    })
 }
 
 renderTableHeader() {
    let header = Object.keys(this.state.students[0])
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }
 
 render() {
    return (
       <div>
          <h1 id='title'>React Dynamic Table</h1>
          <table id='students'>
             <tbody>
                {this.renderTableData()}
             </tbody>
          </table>
       </div>
    )
 }
 }
 
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
       <Table />
       </div>

       <form onSubmit={this.handleSubmit}>
         <label>
           Repo Url :
           <input type="text" value={this.state.repourl} onChange={this.handleRepoChange} />
         </label>
 
         <label>
           Timespan :
         </label>
               <select onChange={this.handleTimespanChange}>
                 <option value="24Hours">24 hours</option>
                 <option value="lastweek">last week</option>
                 <option value="lastmonth">last month</option>
               </select>
  
         <input type="submit" value="Submit" />
       </form>
     );
   }
 }

export default Table;