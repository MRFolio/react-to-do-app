import { useEffect } from "react";

const Alert = ({ type, msg, setAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert({ show: false, type: "", msg: "" });
    }, 3000);
    return () => clearTimeout(timeout);
  }, [setAlert]);
  return <p className={`alert alert-${type}`}>{msg}</p>;
  /* return (
    <div className={styles["alert"]}>
      <p className={styles[`alert-${type}`]}>{msg}</p>;
    </div>
  ); */
};

export default Alert;
