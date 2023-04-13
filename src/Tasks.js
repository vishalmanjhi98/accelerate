import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import './Task.css';
const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const { projectId } = useParams();

  const handleTaskSubmit = (event) => {
    event.preventDefault();
    const taskName = event.target.elements.taskName.value;
    const hoursSpent = event.target.elements.hoursSpent.value;
    const description = event.target.elements.description.value;
    const task = {
      name: taskName,
      hoursSpent: parseFloat(hoursSpent),
      description: description,
      createdAt: moment().format('MMMM Do YYYY, h:mm:ss a')
    };
    setTasks([...tasks, task]);
    event.target.reset();
  };

  const totalHoursSpent = tasks.reduce((total, task) => {
    return total + task.hoursSpent;
  }, 0);

  return (
    <div>
      <h1 id='first'>Tasks for project {projectId}</h1>
      <p>Total hours spent: {totalHoursSpent}</p>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <p>{task.name}</p>
            <p>Hours spent: {task.hoursSpent}</p>
            <p>Description: {task.description}</p>
            <p>Created at: {task.createdAt}</p>
          </li>
        ))}
      </ul>
      <form id='form' onSubmit={handleTaskSubmit}>
        <input type="text" name="taskName" placeholder="Task name" required />
        <input type="number" name="hoursSpent" placeholder="Hours spent" step="0.5" min="0" max="24" required />
        <textarea name="description" placeholder="Description"></textarea>
        <button type="submit">Add task</button>
      </form>
    </div>
  );
};

export default Tasks;
