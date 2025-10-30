import React, { useState } from "react";

const CreateTaskForm = (props) => {
  const { getTaskData, setisCreateForm } = props;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");
  const [dueDate, setDuedate] = useState("");
  const [status, setStatus] = useState("Open");

  const onSubmitForm = async (e) => {
    e.preventDefault();

    if (
      title === "" ||
      description === "" ||
      priority === "" ||
      status === "" ||
      dueDate === ""
    ) {
      alert("Fill the respective fields");
    } else {
      const formData = {
        title,
        description,
        priority,
        due_date: dueDate,
        status,
      };
      const url = "http://localhost:3000/tasks";

      const options = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      };

      console.log(options);

      const response = await fetch(url, options);
      const responseData = await response.json();
      getTaskData();
      setisCreateForm(false);
      console.log(responseData);
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-heading">Create Task</h2>
      <form className="form-card" onSubmit={onSubmitForm}>
        <div className="form-inputs">
          <label className="label" htmlFor="title">
            Title
          </label>
          <input
            id="title"
            className="input-box"
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-inputs">
          <label className="label" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            className="input-box"
            rows={5}
            placeholder="Describe the task"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="form-inputs">
          <label className="label" htmlFor="priority">
            Priority
          </label>
          <select
            id="priority"
            className="input-box"
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
        <div className="form-inputs">
          <label className="label" htmlFor="dueDate">
            Due Date
          </label>
          <input
            id="dueDate"
            className="input-box"
            type="date"
            value={dueDate}
            onChange={(e) => setDuedate(e.target.value)}
          />
        </div>
        <div className="form-inputs">
          <label className="label" htmlFor="status">
            Status
          </label>
          <select
            id="status"
            className="input-box"
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
        <div className="form-button">
          <button className="form-submit" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTaskForm;
