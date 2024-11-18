import React from "react";

const TaskList = ({ tasks, onToggleComplete, onDelete }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className={task.completed ? "completed" : ""}>
          <span onClick={() => onToggleComplete(task.id)}>{task.text}</span>
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;