import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import EditModal from "./components/EditModal";
import "./components/TaskManager.css";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const API_URL = "http://127.0.0.1:8000/api/tasks/";

  // fetch all the tasks
  const fetchTasks = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // add a new task
  const handleAddTask = async (task) => {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
    if (res.ok) fetchTasks();
  };

  // toggle complete
  const handleToggle = async (id) => {
    const task = tasks.find((t) => t.id === id);
    const updated = { ...task, completed: !task.completed };

    const res = await fetch(`${API_URL}${id}/`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updated),
    });
    if (res.ok) fetchTasks();
  };

  // delete task
  const handleDelete = async (id) => {
    const res = await fetch(`${API_URL}${id}/`, { method: "DELETE" });
    if (res.ok) fetchTasks();
  };

  // edit task (open the edit modal)
  const handleEdit = (task) => {
    setEditingTask(task);
  };

  // update task (after editing in modal)
  const handleUpdateTask = async (updatedTask) => {
    const res = await fetch(`${API_URL}${updatedTask.id}/`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedTask),
    });
    if (res.ok) {
      setEditingTask(null); // close modal
      fetchTasks();
    }
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      {/* TaskForm for adding new tasks */}
      <TaskForm onAdd={handleAddTask} />

      {/* Task list */}
      <TaskList
        tasks={tasks}
        onToggle={handleToggle}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />

      {/* Edit modal */}
      {editingTask && (
        <EditModal
          task={editingTask}
          onClose={() => setEditingTask(null)}
          onUpdate={handleUpdateTask}
        />
      )}
    </div>
  );
}