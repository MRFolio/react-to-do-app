import { useState } from "react";
import { FaTrashAlt, FaEdit, FaCheck, FaTimes } from "react-icons/fa";

const ToDo = ({ text, date, completed, priority, id, tasks, setTasks }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedInput, setEditedInput] = useState(text);

  function handleDeleteTask() {
    const newTaskList = tasks.filter((task) => task.id !== id);
    setTasks(newTaskList);
  }

  function handleEditTask() {
    if (isEditing) {
      const editedTasks = tasks.map((task) =>
        task.id === id
          ? { id, text: editedInput, date, completed, priority }
          : task
      );
      setTasks(editedTasks);
    }
    setIsEditing(!isEditing);
  }

  function handleInputChange(e) {
    setEditedInput(e.target.value);
  }

  function handleCompletedTask() {
    const completedTasks = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            completed: !task.completed,
          }
        : task
    );
    setTasks(completedTasks);
  }

  return (
    <div
      className={`todo ${
        priority === "high" ? "high" : priority === "low" ? "low" : ""
      }`}
    >
      <li className={`todo-item ${completed ? "completed" : ""}`}>
        {isEditing ? (
          <input
            onChange={handleInputChange}
            value={editedInput}
            className="edit-input"
            type="text"
          />
        ) : (
          text
        )}
      </li>
      <div className="btns">
        <p className="date">
          <time dateTime={date} title="Date added">
            {date}
          </time>
        </p>
        <button
          onClick={handleEditTask}
          className="edit-btn"
          type="button"
          title="Edit Task"
        >
          <FaEdit />
        </button>
        <button
          onClick={handleCompletedTask}
          className="completed-btn"
          type="button"
          title={!completed ? "Task is completed" : "Task is not completed"}
        >
          {!completed ? <FaCheck /> : <FaTimes className="delete-icon" />}
        </button>
        <button
          onClick={handleDeleteTask}
          className="delete-btn"
          type="button"
          title="Delete Task"
        >
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default ToDo;
