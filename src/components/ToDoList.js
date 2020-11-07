import ToDo from "./ToDo";

const ToDoList = ({ tasks, setTasks, filteredTasks }) => {
  return (
    <div className="tasks-container">
      <ul className="todo-list">
        {filteredTasks.map(({ text, date, completed, priority, id }) => (
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
