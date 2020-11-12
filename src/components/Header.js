import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <h3 className={styles.title}>
        <span className={styles["span-header"]}>To-do List</span>
      </h3>
    </header>
  );
};

export default Header;
