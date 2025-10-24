import React from 'react'
import ChildProp from './ChildProp';

const Parent = () => {
    
    return (
        <div>
            <h1>Parent Component</h1>
            <ChildProp name='sammy'  age = '21'/>
        </div>
    )
}

export default Parent
