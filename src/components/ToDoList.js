import ToDo from "./ToDo";
/* import { FaTrashAlt } from "react-icons/fa"; */

const ToDoList = ({ tasks, setTasks }) => {
  return (
    <div className="tasks-container">
      <ul className="todo-list">
        {tasks.map((task) => (
          <ToDo
            tasks={tasks}
            setTasks={setTasks}
            text={task.text}
            key={task.id}
            task={task}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
