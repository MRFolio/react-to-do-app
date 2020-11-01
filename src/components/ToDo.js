import { useState } from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

const ToDo = ({ text, date, id, tasks, setTasks }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedInput, setEditedInput] = useState(text);
  function handleDeleteTask() {
    const newTaskList = tasks.filter((task) => task.id !== id);
    setTasks(newTaskList);
  }

  function handleEditTask() {
    if (isEditing) {
      const editedTasks = tasks.map((task) =>
        task.id === id ? { id, text: editedInput, date } : task
      );
      setTasks(editedTasks);
    }
    setIsEditing(!isEditing);
  }

  function handleInputChange(e) {
    setEditedInput(e.target.value);
  }

  return (
    <div className="todo">
      <li className={`todo-item ${text.length > 6 ? "long" : ""}`}>
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
          <time datetime={date}>{date}</time>
        </p>
        <button onClick={handleEditTask} className="edit-btn" type="button">
          <FaEdit />
        </button>
        <button onClick={handleDeleteTask} className="delete-btn" type="button">
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default ToDo;
