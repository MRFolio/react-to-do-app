import ToDo from "./ToDo";
import SortButton from "./SortButton";

const ToDoList = ({ tasks, setTasks, filteredTasks, setFilteredTasks }) => {
  function handleDelete() {
    setTasks([]);
  }

  return (
    <section className="tasks-container">
      {tasks.length > 0 && <SortButton tasks={tasks} setTasks={setTasks} />}
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
        <button onClick={handleDelete} className="delete-all">
          Delete All Tasks
        </button>
      )}
    </section>
  );
};

export default ToDoList;
