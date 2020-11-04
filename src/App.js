import "./styles/main.scss";
import "./styles/_base.scss";
import { useEffect, useState } from "react";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import Header from "./components/Header";

function App() {
  const [tasks, setTasks] = useState([]);

  //get tasks from local storage only once
  useEffect(() => getLocalTasks(), []);
  // each time tasks change
  useEffect(() => localStorage.setItem("tasks", JSON.stringify(tasks)), [
    tasks,
  ]);

  // Local storage
  const getLocalTasks = () => {
    if (localStorage.getItem("tasks") === null) {
      localStorage.setItem("tasks", JSON.stringify([]));
    } else {
      const localTasks = JSON.parse(localStorage.getItem("tasks"));
      setTasks(localTasks);
    }
  };

  return (
    <div className="App">
      <Header />
      <Form tasks={tasks} setTasks={setTasks} />
      <ToDoList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
