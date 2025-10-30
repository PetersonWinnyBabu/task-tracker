import React, { useEffect, useState } from "react";
import "./app.css";
import CreateTaskForm from "./components/CreateTaskForm";
import TaskListView from "./components/TaskListView";
import Insights from "./components/Insights";

const App = () => {
  const [tasksData, setTaskData] = useState([]);
  const [isCreateForm, setisCreateForm] = useState(false);

  const [priority, setPriority] = useState("Low");
  const [status, setStatus] = useState("Open");
  const [sortBy, setSortBy] = useState("");

  const getTaskData = async (url = `http://localhost:3000/tasks`) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setTaskData(data);
  };

  useEffect(() => {
    getTaskData();
  }, []);

  const deleteItem = async (id) => {
    const url = `http://localhost:3000/tasks`;
    const options = {
      method: "DELETE",
    };
    const response = await fetch(url + `/${id}`, options);
    const responseData = await response.json();
    getTaskData();
    console.log(responseData);
  };

  const handleFilters = () => {
    const url = `http://localhost:3000/tasks?priority=${priority}&status=${status}&sort_by=${sortBy}`;
    getTaskData(url);
  };

  const handleClearFilters = () => {
    getTaskData();
    setPriority("");
    setSortBy("");
    setStatus("");
  };

  console.log(priority);
  console.log(status);
  console.log(sortBy);

  return (
    <div className="main-container">
      <div className="header">
        <h1 className="heading">Task Tracker</h1>
      </div>

      {isCreateForm ? (
        <CreateTaskForm
          getTaskData={getTaskData}
          setisCreateForm={setisCreateForm}
        />
      ) : (
        <button
          className="create-task"
          type="button"
          onClick={() => {
            setisCreateForm(true);
          }}
        >
          Create Task
        </button>
      )}

      <div className="filters-container">
        <p className="heading">Filters</p>
        <div className="filters">
          <label htmlFor="priority" className="filters-label">
            Priority
          </label>
          <select
            id="priority"
            className="select-filters"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option className="select-option" value="Low">
              Low
            </option>
            <option className="select-option" value="Medium">
              Medium
            </option>
            <option className="select-option" value="High">
              High
            </option>
          </select>
        </div>

        <div className="filters">
          <label htmlFor="status" className="filters-label">
            Status
          </label>
          <select
            id="status"
            className="select-filters"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option className="select-option" value="Open">
              Open
            </option>
            <option className="select-option" value="In Progress">
              In Progress
            </option>
            <option className="select-option" value="Done">
              Done
            </option>
          </select>
        </div>

        <div className="sort-by">
          <label className="filters-label">
            Due_Date ASC
            <input
              type="radio"
              name="sortBy"
              value="due_date.asc"
              className="radio-button"
              onChange={(e) => setSortBy(e.target.value)}
            />
          </label>

          <label className="filters-label">
            Due_Date DESC
            <input
              type="radio"
              name="sortBy"
              value="due_date.desc"
              className="radio-button"
              onChange={(e) => setSortBy(e.target.value)}
            />
          </label>
        </div>

        <button className="filter-button" onClick={handleFilters}>
          Filter Tasks
        </button>

        <button className="filter-button" onClick={handleClearFilters}>
          Clear Filters
        </button>
      </div>

      <TaskListView tasksData={tasksData} deleteItem={deleteItem} />
      <Insights />
    </div>
  );
};

export default App;
