import { FaSortAmountDown } from "react-icons/fa";

const SortButton = ({ tasks, setTasks }) => {
  function handleSort() {
    const sortedTasks = [...tasks].sort((a, b) => b.priority - a.priority);
    setTasks(sortedTasks);
  }
  return (
    <button onClick={handleSort} className="sort-btn" type="button">
      Sort tasks by priority:
      <FaSortAmountDown className="sort-icon" />
    </button>
  );
};

export default SortButton;
