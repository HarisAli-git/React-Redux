import { render } from "@testing-library/react";
import React, { Component } from "react";
import Todo from "./todo";

class App extends Component{
  
  state = {
  todo: [
    {id: 0, task: "TODO List for 26th January, 22"}, 
    {id: 1, task: "reach office by 1 pm"},
    {id: 2, task: "reach university by 3:30 pm"},
    {id: 3, task: "get back to office by 5 pm"}   
  ]
  }

  deleteTODO = (id) => {
    console.log(id)
  }

  render()
  {
  return (
    <div className="todo-app container">
      <h1 className="center blue-text">TODO LIST!</h1>
      <Todo todolist={this.state.todo} deleteTODO={this.deleteTODO}></Todo>
    </div>
  )
  }
}

export default App;
