import React from 'react'

const ChildProp = ({ name,age }) => {
    return (
        <div>
            <h2>Hello {name}</h2>
            <p>You age is {age}</p>
        </div>
    )
}

export default ChildProp
