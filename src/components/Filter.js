const Filter = ({ setFilterStatus }) => {
  const handleStatus = (e) => {
    setFilterStatus(e.target.value);
  };

  return (
    <div className="filter-container">
      <label htmlFor="filter-select" className="label-filter">
        Choose to filter tasks:
      </label>
      <select onChange={handleStatus} name="filter" id="filter-select">
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Incompleted">Incompleted</option>
      </select>
    </div>
  );
};

export default Filter;
