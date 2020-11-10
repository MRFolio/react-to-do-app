import { useEffect, useState } from "react";

const Selection = ({ setSelection }) => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowDimensions]);

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
  }
  const { width } = getWindowDimensions();

  function handleSelection(e) {
    setSelection(e.target.value);
  }

  return (
    <div className="select-container">
      <label htmlFor="priority-select" className="label">
        {`${width > 526 ? "Choose" : ""} Task Priority`}
      </label>
      <select onChange={handleSelection} name="priority" id="priority-select">
        <option value="1">Normal</option>
        <option value="2">high</option>
        <option value="0">low</option>
      </select>
    </div>
  );
};

export default Selection;
