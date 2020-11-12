import styles from "./Filter.module.scss";

const Filter = ({ setFilterStatus, tasks }) => {
  const handleStatus = (e) => {
    setFilterStatus(e.target.value);
  };

  return (
    tasks.length > 0 && (
      <div className={styles["filter-container"]}>
        <label htmlFor="filter-select" className={styles["label-filter"]}>
          Choose to filter tasks:
        </label>
        <select
          onChange={handleStatus}
          name="filter"
          id="filter-select"
          className={styles["filter-select"]}
        >
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Incompleted">Incompleted</option>
        </select>
      </div>
    )
  );
};

export default Filter;
