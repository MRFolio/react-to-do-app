import { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";
import shortid from "shortid";

const Form = ({ tasks, setTasks }) => {
  const [input, setInput] = useState("");

  function handleInput(e) {
    setInput(e.target.value);
  }

  function handleAddTask(e) {
    e.preventDefault();
    const date = new Date().toLocaleDateString();
    const newTask = { id: shortid.generate(), text: input, date };
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
      />
      <button onClick={handleAddTask} className="btn" type="submit">
        <FaPlusSquare />
      </button>
    </form>
  );
};

export default Form;
