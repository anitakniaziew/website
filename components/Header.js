import Nav from "./Nav.js";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.name}>Anita Kowalska</h1>
      <Nav />
    </div>
  );
}
