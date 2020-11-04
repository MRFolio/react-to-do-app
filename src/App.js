import "./styles/main.scss";
import "./styles/_base.scss";
import { useEffect, useState } from "react";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import Header from "./components/Header";

function App() {
  const [tasks, setTasks] = useState([]);

  //do it only once
  useEffect(() => {
    getLocalTasks();
  }, []);

  // each time tasks change
  useEffect(() => {
    saveLocalTasks();
  }, [tasks]);

  // Local storage
  const getLocalTasks = () => {
    if (localStorage.getItem("tasks") === null) {
      localStorage.setItem("tasks", JSON.stringify([]));
    } else {
      const localTasks = JSON.parse(localStorage.getItem("tasks"));
      setTasks(localTasks);
    }
  };

  const saveLocalTasks = () =>
    localStorage.setItem("tasks", JSON.stringify(tasks));

  return (
    <div className="App">
      <Header />
      <Form tasks={tasks} setTasks={setTasks} />
      <ToDoList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
