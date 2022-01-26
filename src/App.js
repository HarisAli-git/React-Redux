import { Component } from 'react/cjs/react.development';
import './App.css';
import Com1 from './Com2';
import AddPerson from './AddPerson';

class App extends Component{

  state = {
  people: [
    {name: "Haris Ali", age: 21, id: 1},
    {name: "Haris Ali", age: 22, id: 2},
    {name: "Haris Ali", age: 22, id: 3}
    ]
  }

  DeletePerson = (id) => {
    console.log(id);
    let c_people = this.state.people.filter(person => {
      return person.id !== id;
    })

    this.setState({
      people: c_people
    })

  }

  AddPerson = (person) => {
    console.log(person);
    person.id = Math.random();
    let c_people = [...this.state.people, person];
    console.log(c_people);
    this.setState(
      {
        people: c_people
      }
    )

  }

  render(){
  return (
    <div className="App">
      <p>
        Second React App!
      </p>
      <Com1 crowd = {this.state.people} deletePerson={this.DeletePerson}/>
      <AddPerson AddPerson = {this.AddPerson}/>
    </div>
  );}
}

export default App;
