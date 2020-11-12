import { useState, useEffect, useRef } from "react";
import { FaPlusSquare } from "react-icons/fa";
import Selection from "./Selection";
import shortid from "shortid";

const Form = ({ tasks, setTasks, showAlert }) => {
  const [input, setInput] = useState("");
  const [selection, setSelection] = useState(1);

  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus(), []);

  function handleInput(e) {
    setInput(e.target.value);
  }

  function handleAddTask(e) {
    e.preventDefault();
    if (input) {
      const date = Intl.DateTimeFormat(navigator.language, {
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }).format(new Date());
      const newTask = {
        id: shortid.generate(),
        text: input,
        date,
        completed: false,
        priority: selection,
      };
      setTasks([newTask, ...tasks]);
      setInput("");
      showAlert(true, "success", "Task was added!");
    } else if (!input) {
      showAlert(true, "danger", "Please enter value!");
    }
  }

  return (
    <form onSubmit={handleAddTask} className="form">
      <input
        className="input"
        type="text"
        value={input}
        onChange={handleInput}
        ref={inputRef}
        placeholder="Type in task..."
      />
      <button className="btn" type="submit" title="Add task">
        <FaPlusSquare />
      </button>
      <Selection setSelection={setSelection} />
    </form>
  );
};

export default Form;
