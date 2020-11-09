import { useState, useEffect } from "react";
import { FaPlusSquare } from "react-icons/fa";
import shortid from "shortid";

const Form = ({ tasks, setTasks }) => {
  const [input, setInput] = useState("");
  const [selection, setSelection] = useState("Normal");
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
  }
  const { width } = getWindowDimensions();

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowDimensions]);

  function handleInput(e) {
    setInput(e.target.value);
  }

  function handleSelection(e) {
    setSelection(e.target.value);
  }

  function handleAddTask(e) {
    if (input) {
      e.preventDefault();
      const date = new Date().toLocaleDateString();
      const newTask = {
        id: shortid.generate(),
        text: input,
        date,
        completed: false,
        priority: selection,
      };
      setTasks([newTask, ...tasks]);
      setInput("");
    }
  }

  return (
    <form className="form">
      <input
        className="input"
        type="text"
        value={input}
        onChange={handleInput}
        placeholder="Type in task..."
      />
      <button
        onClick={handleAddTask}
        className="btn"
        type="submit"
        title="Add task"
      >
        <FaPlusSquare />
      </button>
      <div className="select-container">
        <label htmlFor="priority-select" className="label">
          {`${width > 526 ? "Choose" : ""} Task Priority`}
          {/* {`${window.innerWidth > 526 ? "Choose" : ""} Task Priority:`} */}
        </label>
        <select onChange={handleSelection} name="priority" id="priority-select">
          <option value="normal">Normal</option>
          <option value="high">high</option>
          <option value="low">low</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
