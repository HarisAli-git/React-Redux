import React from 'react'

const Com1 = ({crowd, deletePerson}) => {
    const people = crowd.map(person => {
        return person.age > 21 ? (
            <div className="person" key={person.id}>
                <div>
                    {person.name}
                </div>
                <div>
                    {person.age}
                </div>
                <button onClick={() => {deletePerson(person.id)}}>Delete Me!</button>
            </div>
        ): null;
    })

    return(
        <div className="com">
            {people}
        </div>
    )
}

export default Com1;