import styles from "./Header.module.css";

export default function Header(props) {
  return (
    <div className={styles.header}>
      <nav className={styles.navPanel}>{props.children}</nav>
    </div>
  );
}
