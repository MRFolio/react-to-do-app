import { useState } from "react";
import { FaSortAmountDown } from "react-icons/fa";
import styles from "./SortButton.module.scss";
import Spinner from "./Spinner";

const SortButton = ({ tasks, setTasks }) => {
  const [loading, setIsLoading] = useState(false);

  function handleSort() {
    setIsLoading(true);
    const sortedTasks = [...tasks].sort((a, b) => b.priority - a.priority);
    setTasks(sortedTasks);
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }
  return (
    <>
      <button onClick={handleSort} className={styles["sort-btn"]} type="button">
        Sort tasks by priority:
        <FaSortAmountDown className={styles["sort-icon"]} />
      </button>
      {loading && <Spinner />}
    </>
  );
};

export default SortButton;
