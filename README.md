
# Task Tracker

Task Tracker is a Simple Full Stack Project that can manage Tasks and Provide Insights of the user's workload, demonstrating basic analytical logic outside of a large language model (LLM).


## 📘 Overview

This app allows users to:

* ✅ **Manage Tasks** – Create, view, update (status/priority), and list tasks with title, description, and due date.
* 💡 **Generate Insights** – Provide a simple, **rule-based workload summary** mimicking “AI-like” analytical logic.

The project showcases structured development, clean architecture, and professional documentation.

---

## ⚙️ Tech Stack

| Component           | Technology                          | Description                               |
| ------------------- | ----------------------------------- | ----------------------------------------- |
| **Backend**         | Node.js, Express                    | REST API and server setup                 |
| **Database**        | SQLite3 / Better-SQLite3            | Lightweight and portable DB (recommended) |
| **Frontend**        | React / Vanilla JS                  | Interactive client-side UI                |
| **Package Manager** | npm / yarn                          | Dependency management                     |
| **Documentation**   | README.md, DECLARATION.md, notes.md | Setup, integrity, and design notes        |

---

## 🧱 Project Structure

```
task-tracker/
├── backend/
│   ├── server.js             # Express server setup
│   ├── src/
│   │   ├── routes/           # Route handlers (e.g., tasks.router.js)
│   │   ├── services/         # Database logic (e.g., task.service.js)
│   │   └── db/               # DB connection & schema setup
│   └── task_tracker.db       # SQLite DB file
├── frontend/
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── components/       # UI components: TaskForm, TaskList, InsightsPanel
│       └── App.js / app.js   # Main entry point
├── README.md                 # Setup guide
├── DECLARATION.md            # Integrity declaration
└── notes.md                  # Design rationale
```

---

## 🚀 Setup Instructions

## Run Locally

Clone the project

```bash
  git clone https://link-to-project](https://github.com/PetersonWinnyBabu/task-tracker
```

Go to the project directory

```bash
  cd task-tracker
```

### 1️⃣ Backend Setup

```bash
# Navigate to backend
cd backend

# Install dependencies
npm install 

Run the Backend server
npm start
```

### 2️⃣ API Endpoints

| Endpoint     | Method  | Description                             |
| ------------ | ------- | --------------------------------------- |
| `/tasks`     | `POST`  | Create a new task                       |
| `/tasks`     | `GET`   | List/filter/sort tasks                  |
| `/tasks/:id` | `PATCH` | Update task (status/priority)           |
| `/insights`  | `GET`   | Fetch task summary and AI-like insights |

Example logic for insights:

> “You have 8 open tasks, 5 of which are High Priority. 3 tasks are due within the next 2 days.”

---

### 3️⃣ Frontend Setup

```bash
# Navigate to frontend
cd frontend

# Initialize project (React example)
npm install
npm run dev
```

* Built a **Task Form** for creating tasks.
* Display tasks in a **Task List/Table** with sorting and filtering options.
* Fetch and render **Smart Insights** using `/insights`.

---

## 📄 Documentation

| File               | Purpose                                |
| ------------------ | -------------------------------------- |
| **README.md**      | Setup and usage instructions           |
| **DECLARATION.md** | Integrity declaration (signed & dated) |
| **notes.md**       | Design decisions and reasoning         |

---



*  Backend runs without errors (`npm start`)
*  Frontend successfully connects to API
*  CRUD operations functional
*  Insights endpoint returns summary
*  All documentation files complete

---



* Used **Better-SQLite3** for simplicity during testing.
* Maintained a **modular structure** for scalability.
* Ensured **CORS** is enabled for frontend-backend communication.

