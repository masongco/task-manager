import React, { useState, useEffect } from "react";

export default function TaskForm({ onAdd, onUpdate, editingTask, clearEdit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // populate the form when editing
  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    if (editingTask) {
      // update the existing task
      onUpdate({ ...editingTask, title, description });
      clearEdit();
    } else {
      // add a new task
      onAdd({ title, description });
    }

    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">{editingTask ? "Update Task" : "Add Task"}</button>
      {editingTask && (
        <button type="button" onClick={clearEdit}>
          Cancel
        </button>
      )}
    </form>
  );
}