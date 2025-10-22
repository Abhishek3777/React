import React from 'react'

const map = () => {

    const todos = [
        { id: 1, task: "Code backend", description: "Express" },
        { id: 2, task: "Test", description: "Postman" },
        { id: 3, task: "Code", description: "Code frontend" }
    ];

    return (
        <ul>
            {
                todos.map(todo => (
                    <li key={todo.id}>{todo.task}</li>
                ))
            }
        </ul>
    )
}

export default map
