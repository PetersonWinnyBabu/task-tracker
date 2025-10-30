import TaskListItem from "./TaskListItem";
const TaskListView = (props) => {
  const { tasksData, deleteItem } = props;
  return (
    <div className="task-list-container">
      <ul className="task-list">
        {tasksData.map((each) => {
          return (
            <TaskListItem key={each.id} data={each} deleteItem={deleteItem} />
          );
        })}
      </ul>
    </div>
  );
};

export default TaskListView;
