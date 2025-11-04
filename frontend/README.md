# Task Manager Web App

A simple **Task Manager** web application built with **React.js** (Hooks) for the frontend and **Django + Django REST Framework** for the backend.  
It allows users to **create, view, edit, complete, and delete tasks**. Editing is done via a modal for better UX.

---

## Table of Contents

- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Setup Instructions](#setup-instructions)  
  - [Backend](#backend)  
  - [Frontend](#frontend)  
- [API Endpoints](#api-endpoints)  
- [Additional Notes](#additional-notes)

---

## Features

- View a list of tasks  
- Create a new task (title + optional description)  
- Edit an existing task using a modal  
- Toggle task completed status  
- Delete a task  
- Responsive UI with clean card layout

---

## Tech Stack

- **Frontend:** React.js (Hooks), CSS  
- **Backend:** Django, Django REST Framework, SQLite  
- **HTTP Requests:** fetch API

---

## Setup Instructions

### Backend

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   # macOS/Linux
   source venv/bin/activate
   # Windows
   venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install django djangorestframework
   ```
4. Apply database migrations:
   ```bash
   python manage.py migrate
   ```
5. Start the Django server:
   ```bash
   python manage.py runserver
   ```
   Backend API will be available at `http://127.0.0.1:8000/api/tasks/`

---

### Frontend

1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```
   Frontend will be available at `http://localhost:3000/`

---

## API Endpoints

| Method | Endpoint          | Description                     | Request Body                  |
|--------|-----------------|---------------------------------|-------------------------------|
| GET    | `/api/tasks/`    | List all tasks                   | N/A                           |
| POST   | `/api/tasks/`    | Create a new task                | `{ "title": "...", "description": "..." }` |
| GET    | `/api/tasks/{id}/` | Retrieve a task by ID          | N/A                           |
| PUT    | `/api/tasks/{id}/` | Update a task (title & description) | `{ "title": "...", "description": "..." }` |
| PATCH  | `/api/tasks/{id}/` | Toggle task completed status    | `{ "completed": true/false }` |
| DELETE | `/api/tasks/{id}/` | Delete a task                  | N/A                           |

---

## Additional Notes

- **Editing Tasks:** Clicking **Edit** opens a modal pre-filled with the task data.  
- **Database:** Uses SQLite by default.  
- **CORS:** If frontend and backend run on different ports, configure Django CORS settings as needed.  
- **Assumptions:**  
  - No authentication required.  
  - Tasks are globally visible (not user-specific).  
  - Frontend communicates with backend via REST API only.

---

## Project Structure

```
/backend/    -> Django project with `tasks` app
/frontend/   -> React app with components: TaskForm, TaskList, EditModal
```

---

## Author

Mark Allen Songco