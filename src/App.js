import React, { Component,} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component{
  state = {
    Person:[
     

    ],
    otherstate: 'some other value',
    showPerson:false
  }

  
   //this is for switch handler for name change 
  
  //Name change in the input 
  
  //Toggle the whole Div
  togglePersonHandler =() =>{
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow})


  }
  render(){
    let Persons = null;

    if(this.state.showPerson){
      Persons = (
        <div>
        <Person  />
        <person2 />
        
         </div> 
      );

    }
    const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    };
    return(
      <div className = 'App'>
        <h1> Hi, /I am Qurat Ul Ain Mumtaz </h1>
        <p style={{mystyle}} > I am new Interner in Nesl IT</p>
         <button onClick={this.togglePersonHandler} >Please Click on Button For Eid Wish</button>
          { Persons }
        
           
       
      </div>
    )
 }
}

export default App;