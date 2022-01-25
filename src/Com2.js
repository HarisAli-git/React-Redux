import React from 'react'

const Com1 = (props) => {

    const {crowd} = props;
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

export default Com1;