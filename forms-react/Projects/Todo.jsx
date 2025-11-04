import React, { useState } from 'react'

const Todo = () => {
    const [todo, setTodo] = useState([
        { id: 1, name: 'Learn React' },
        { id: 2, name: 'SQL queries practice' }
    ]);

    const [task, setTask] = useState("");

    function addTask(e) {
        e.preventDefault();
        const newTask = { id: Date.now(), name: task };
        setTodo([...todo, newTask]);
        setTask("");
    }
    function deleteTask(id) {
        setTodo(todo.filter(item => item.id !== id));
    }

    return (
        <div>
            <h1>To-Do App

            </h1>
            <form>
                <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder='Enter task' />
                <button onClick={addTask}>Add Task</button>
            </form>

            <ul>
                {todo.map((task) => (
                    <li key={task.id}>{task.name} <button onClick={() => deleteTask(task.id)}>Delete</button></li>
                ))}
            </ul>
        </div>
    )
}

export default Todo
