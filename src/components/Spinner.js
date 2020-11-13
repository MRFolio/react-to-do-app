import { FaSpinner } from "react-icons/fa";
import styles from "./Spinner.module.scss";

const Spinner = () => {
  return (
    <section className={styles.overlay}>
      <div className={styles.wrapper}>
        <FaSpinner className={styles.spinner} />
      </div>
    </section>
  );
};

export default Spinner;
