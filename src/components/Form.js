import { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";
import Selection from "./Selection";
import shortid from "shortid";

const Form = ({ tasks, setTasks }) => {
  const [input, setInput] = useState("");
  const [selection, setSelection] = useState("1");

  function handleInput(e) {
    setInput(e.target.value);
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
      <Selection setSelection={setSelection} />
    </form>
  );
};

export default Form;
