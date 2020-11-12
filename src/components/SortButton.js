import { FaSortAmountDown } from "react-icons/fa";
import styles from "./SortButton.module.scss";

const SortButton = ({ tasks, setTasks }) => {
  function handleSort() {
    const sortedTasks = [...tasks].sort((a, b) => b.priority - a.priority);
    setTasks(sortedTasks);
  }
  return (
    <button onClick={handleSort} className={styles["sort-btn"]} type="button">
      Sort tasks by priority:
      <FaSortAmountDown className={styles["sort-icon"]} />
    </button>
  );
};

export default SortButton;
