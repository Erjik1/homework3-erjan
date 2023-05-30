import React, { useState } from 'react';

const Todo = () => {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  const handleInputChange = (e) => {
    setNewTask(e.target.value)
  }

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask])
      setNewTask('')
    }
  }

  return (
      <div>
        <h1>TODOLIST</h1>
        <input
            type="text"
            value={newTask}
            onChange={handleInputChange}
            placeholder="НАПИШИ СЮДА!!!"
        />
        <button onClick={handleAddTask}>НАЖАТЬ СЮДА!!!</button>
        <ul>
          {tasks.map((task, index) => (
              <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
  )
}

export default Todo;