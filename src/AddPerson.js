import React from 'react'
import { Component } from 'react/cjs/react.development';

class AddPerson extends Component{

    state = {
        name: null,
        age: null
    }

    HandleInput = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    HandleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render(){
        return(
            <div className="person">
               <form onSubmit={this.HandleSubmit}>
                    <label htmlFor="name">Name: </label>
                   <input type="text" id="name" onChange={this.HandleInput}/>
                   <label htmlFor="name">Age: </label>
                   <input type="number" id="age" onChange={this.HandleInput}/>
                   <button>Submit</button>
               </form> 
            </div>
        )
    }
    
};

export default AddPerson;