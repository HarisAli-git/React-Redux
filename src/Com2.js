import React, { Component } from 'react'

class Com1 extends Component{
    render(){

        const {crowd} = this.props;
        const people = crowd.map(person => {
            return (
                <div className="person" key={person.id}>
                    <div>
                        {person.name}
                    </div>
                    <div>
                        {person.age}
                    </div>
                </div>
            )
        })

        return(
            <div className="com">
                {people}
            </div>
        )
    }
}

export default Com1;