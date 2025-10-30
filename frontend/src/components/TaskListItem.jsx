import { Link } from "react-router-dom";
import React from "react";

const TaskListItem = (props) => {
  const { data, deleteItem } = props;
  const { id, title, description, priority, due_date, status } = data;

  const onClickDelete = () => {
    deleteItem(id);
  };

  return (
    <li className="list-item">
      <h2 className="task-title">{title}</h2>
      <p>{id}</p>
      <p className="task-items">{description}</p>
      <p className="task-items">Priority: {priority}</p>
      <p className="task-items">Due Date : {due_date}</p>
      <p className="task-items">Status : {status}</p>
      <div className="buttons-container">
        <button className="delete-button" type="button" onClick={onClickDelete}>
          DELETE
        </button>
      </div>
    </li>
  );
};

export default TaskListItem;
