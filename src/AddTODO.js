import React, { Component } from "react";

class AddTODO extends Component{
    state = {
        task: ' '
    }

    handleChange = (e) =>
    {
        this.setState({
            task: e.target.value
        })
    }

    handleSubmit = (e) =>
    {
        e.preventDefault();
        this.props.AddTodo(this.state)
    }

    render(){
    return (  
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>Enter new TODO task: </label>
                <input onChange={this.handleChange} type="text"></input>
            </form>
        </div>
    );}
}

export default AddTODO;