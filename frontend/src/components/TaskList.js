import React from "react";

export default function TaskList({ tasks, onToggle, onDelete, onEdit }) {
  if (!tasks.length) return <p>No tasks yet.</p>;

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className={task.completed ? "completed" : ""}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <div>
                <button
                onClick={() => onToggle(task.id)}
                className="complete"
                >
                {task.completed ? "Undo" : "Complete"}
                </button>
                <button
                onClick={() => onEdit(task)}
                className="edit"
                >
                Edit
                </button>
                <button
                onClick={() => onDelete(task.id)}
                className="delete"
                >
                Delete
                </button>
          </div>
        </li>
      ))}
    </ul>
  );
}