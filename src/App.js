import { render } from "@testing-library/react";
import React, { Component } from "react";
import Todo from "./todo";
import AddTODO from "./AddTODO";

class App extends Component{
  
  state = {
  todo: [
    {id: 0, task: "TODO List for 26th January, 22"}, 
    {id: 1, task: "reach office by 1 pm"},
    {id: 2, task: "reach university by 3:30 pm"},
    {id: 3, task: "get back to office by 5 pm"}   
  ]
  }

  AddTodo = (todo_item) => {
    todo_item.id = Math.random();
    let t = [...this.state.todo, todo_item]

    this.setState({
      todo: t
    })
  }

  deleteTODO = (id) => {
    let todo_c = this.state.todo.filter(
      todo => {return id !== todo.id} 
    )

    this.setState(
      {
        todo: todo_c
      }
    )

  }

  render()
  {
  return (
    <div className="todo-app container">
      <h1 className="center blue-text">TODO LIST!</h1>
      <Todo todolist={this.state.todo} deleteTODO={this.deleteTODO}></Todo>
      <AddTODO AddTodo={this.AddTodo} />
    </div>
  )
  }
}

export default App;
