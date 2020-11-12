import ToDo from "./ToDo";
import SortButton from "./SortButton";
import styles from "./ToDoList.module.scss";

const ToDoList = ({ tasks, setTasks, filteredTasks, showAlert }) => {
  function handleDelete() {
    setTasks([]);
    showAlert(true, "danger", "All tasks were deleted!");
  }

  return (
    <section className={styles["tasks-container"]}>
      {tasks.length > 0 && <SortButton tasks={tasks} setTasks={setTasks} />}
      <ul className={styles["todo-list"]}>
        {filteredTasks.map((
          /* { text, date, completed, priority, id } */ item
        ) => (
          /* const { text, date, completed, priority, id } = task; */
          <ToDo
            tasks={tasks}
            setTasks={setTasks}
            /* text={text}
            date={date}
            completed={completed}
            priority={priority}
            id={id} */
            {...item}
            key={item.id}
            showAlert={showAlert}
          />
        ))}
      </ul>
      {tasks.length > 0 && (
        <button onClick={handleDelete} className={styles["delete-all"]}>
          Delete All Tasks
        </button>
      )}
    </section>
  );
};

export default ToDoList;
