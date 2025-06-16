
'use client';

import { useState } from "react";
import Link from 'next/link';

class Task {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
}

let counter = 0;

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [inputName, setInputName] = useState("");

  function addTask() {
    if (inputName.trim() === "") return;
    const newTask = new Task(inputName, counter += 1);
    setTasks([...tasks, newTask]);
    setInputName("");
  }

  function removeTask(idToRemove) {
    // Filter out the task with the matching id
    const updatedTasks = tasks.filter(task => task.id !== idToRemove);
    setTasks(updatedTasks);
  }

  return (
    <div style={{ padding: '20px' }}>
      <Link href="/remove">
        <button>Go to remove Page</button>
      </Link>
      <h1>Task List, Remove</h1>

      <input
        type="text"
        placeholder="Enter task name"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />

      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name} is task number {task.id}, 
            <button onClick={() => removeTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
