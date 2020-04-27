import styles from "./Header.module.css";

export default function Header(props) {
  return (
    <div className={styles.header}>
      <h1 className={styles.name}>Anita Kowalska</h1>
      {props.children}
    </div>
  );
}
