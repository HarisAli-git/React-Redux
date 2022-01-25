import { Component } from 'react/cjs/react.development';
import './App.css';
import Com1 from './Com2';

class App extends Component{

  state = {
  people: [
    {name: "Haris Ali", age: 21, id: 1},
    {name: "Haris Ali", age: 22, id: 2},
    {name: "Haris Ali", age: 22, id: 3}
    ]
  }

  render(){
  return (
    <div className="App">
      <p>
        Second React App!
      </p>
      <Com1 crowd = {this.state.people}/>
    </div>
  );}
}

export default App;
