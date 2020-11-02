import { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";
import shortid from "shortid";

const Form = ({ tasks, setTasks }) => {
  const [input, setInput] = useState("");
  const [selection, setSelection] = useState("Normal");

  function handleInput(e) {
    setInput(e.target.value);
  }

  function handleSelection(e) {
    setSelection(e.target.value);
  }

  function handleAddTask(e) {
    e.preventDefault();
    const date = new Date().toLocaleDateString();
    const newTask = {
      id: shortid.generate(),
      text: input,
      date,
      completed: false,
      priority: selection,
    };
    setTasks([...tasks, newTask]);
    setInput("");
  }

  return (
    <form className="form">
      <input
        className="input"
        type="text"
        value={input}
        onChange={handleInput}
        placeholder="Type in task"
      />
      <div className="select-container">
        <label htmlFor="priority-select" className="label">
          Task priority:
        </label>
        <select onChange={handleSelection} name="priority" id="priority-select">
          <option value="normal">Normal</option>
          <option value="high">high</option>
          <option value="low">low</option>
        </select>
      </div>
      <button
        onClick={handleAddTask}
        className="btn"
        type="submit"
        title="Add task"
      >
        <FaPlusSquare />
      </button>
    </form>
  );
};

export default Form;
