import { useState, useEffect, useRef } from "react";
import { FaTrashAlt, FaEdit, FaCheck, FaTimes } from "react-icons/fa";
import Button from "./Button";

const ToDo = ({
  text,
  date,
  completed,
  priority,
  id,
  tasks,
  setTasks,
  showAlert,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedInput, setEditedInput] = useState(text);

  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  function handleDeleteTask() {
    const newTaskList = tasks.filter((task) => task.id !== id);
    setTasks(newTaskList);
    showAlert(true, "danger", "Task was deleted!");
  }

  function handleEditTask() {
    if (isEditing) {
      const editedTasks = tasks.map((task) =>
        task.id === id ? { ...task, text: editedInput } : task
      );
      setTasks(editedTasks);
      showAlert(true, "success", "Task was edited!");
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
    <li
      className={`todo ${
        priority === 2 ? "high" : priority === 0 ? "low" : ""
      }`}
    >
      <div className={`todo-item ${completed ? "completed" : ""}`}>
        {isEditing ? (
          <input
            onChange={handleInputChange}
            value={editedInput}
            className="edit-input"
            type="text"
            ref={inputRef}
          />
        ) : (
          text
        )}
      </div>
      <div className="btns">
        <p className="date">
          <time dateTime={date} title="Date added">
            {date}
          </time>
        </p>
        <Button
          onClick={handleEditTask}
          className="edit-btn"
          title="Edit task"
          icon={<FaEdit />}
        />
        <Button
          onClick={handleCompletedTask}
          className="completed-btn"
          title={!completed ? "Task is completed" : "Task is not completed"}
          icon={!completed ? <FaCheck /> : <FaTimes className="delete-icon" />}
        />
        <Button
          onClick={handleDeleteTask}
          className="delete-btn"
          title="Delete Task"
          icon={<FaTrashAlt />}
        />
      </div>
    </li>
  );
};

export default ToDo;
