import React, { Component } from 'react'

class Com1 extends Component{
    render(){

        const {name, age} = this.props

        return(
            <div className="com">
                <h3>Name: {name} </h3>
                <h2>Body: {age} </h2>
            </div>
        )
    }
}

export default Com1;