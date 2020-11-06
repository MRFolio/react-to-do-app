import ToDo from "./ToDo";
/* import { FaTrashAlt } from "react-icons/fa"; */

const ToDoList = ({ tasks, setTasks }) => {
  return (
    <div className="tasks-container">
      <ul className="todo-list">
        {tasks.map(({ text, date, completed, priority, id }) => (
          /* const { text, date, completed, priority, id } = task; */
          <ToDo
            tasks={tasks}
            setTasks={setTasks}
            text={text}
            date={date}
            completed={completed}
            priority={priority}
            id={id}
            key={id}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
