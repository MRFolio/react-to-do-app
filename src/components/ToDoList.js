import ToDo from "./ToDo";

const ToDoList = ({ tasks, setTasks, filteredTasks }) => {
  function handleClick() {
    setTasks([]);
  }
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
      {tasks.length > 0 && (
        <button onClick={handleClick} className="delete-all">
          Delete All Tasks
        </button>
      )}
    </div>
  );
};

export default ToDoList;
