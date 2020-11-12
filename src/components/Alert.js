import { useEffect } from "react";
import styles from "./Alert.module.scss";

const Alert = ({ type, msg, setAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert({ show: false, type: "", msg: "" });
    }, 3000);
    return () => clearTimeout(timeout);
  }, [setAlert]);

  return <p className={styles[`${type}-alert`]}>{msg}</p>;
};

export default Alert;
