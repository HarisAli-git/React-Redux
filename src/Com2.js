import React from 'react'

const Com1 = ({crowd}) => {
    const people = crowd.map(person => {
        return person.age > 21 ? (
            <div className="person" key={person.id}>
                <div>
                    {person.name}
                </div>
                <div>
                    {person.age}
                </div>
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