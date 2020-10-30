import "./styles/main.scss";
import "./styles/_base.scss";
import { useState } from "react";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import Header from "./components/Header";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <Header />
      <Form tasks={tasks} setTasks={setTasks} />
      <ToDoList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
