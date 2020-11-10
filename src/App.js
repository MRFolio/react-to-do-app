import "./styles/main.scss";
import { useEffect, useState } from "react";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import Header from "./components/Header";
import Filter from "./components/Filter";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");
  const [filteredTasks, setFilteredTasks] = useState([]);

  //get tasks from local storage only once
  useEffect(() => getLocalTasks(), []);
  // each time tasks change
  useEffect(() => localStorage.setItem("tasks", JSON.stringify(tasks)), [
    tasks,
  ]);

  //Filter tasks
  useEffect(() => {
    switch (filterStatus) {
      case "Completed":
        setFilteredTasks(tasks.filter((task) => task.completed));
        break;
      case "Incompleted":
        setFilteredTasks(tasks.filter((task) => !task.completed));
        break;
      default:
        setFilteredTasks(tasks);
    }
  }, [tasks, filterStatus]);

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
      <main>
        <Form tasks={tasks} setTasks={setTasks} />
        <ToDoList
          tasks={tasks}
          setTasks={setTasks}
          filteredTasks={filteredTasks}
          setFilteredTasks={setFilteredTasks}
        />
        <Filter tasks={tasks} setFilterStatus={setFilterStatus} />
      </main>
    </div>
  );
}

export default App;
