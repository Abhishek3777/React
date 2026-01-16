import React, { useState } from 'react'

const todo2 = () => {

    const [todo, setTodo] = useState([
        { id: 1, name: 'Learn React' },
        { id: 2, name: 'SQL queries practice' }
    ]);
    const [task, setTask] = useState('');

    function addTask(e) {
        e.preventDefault();
        const newTask = { id: Date.now(), name: task };
        setTodo([...todo, newTask]);
        setTask("");
    }
    function deleteTask(id){
        setTodo(todo.filter(item => item.id !== id));
    }

    return (
        <div>
            <form>
                <input type="text" placeholder='enter task' value={task} onChange={(e) => setTask(e.target.value)} />
                <button onClick={addTask}>Add</button>
            </form>
            <ul>
                {
                    todo.map((t) => (
                        <li key={t.id}>{t.name} <button onClick={() => deleteTask(t.id)}>Delete</button></li>
                    ))
                }
            </ul>

        </div>
    )
}

export default todo2
