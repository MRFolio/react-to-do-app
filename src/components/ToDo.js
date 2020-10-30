import { FaTrashAlt } from "react-icons/fa";

const ToDo = ({ text, task, tasks, setTasks }) => {
  function handleDeleteTask() {
    const newTaskList = tasks.filter((item) => item.id !== task.id);
    setTasks(newTaskList);
  }
  return (
    <div className="todo">
      <li className="todo-item">{text}</li>
      <button onClick={handleDeleteTask} className="delete-btn" type="button">
        <FaTrashAlt />
      </button>
    </div>
  );
};

export default ToDo;
