import styles from "./Box.module.css";
import classNames from "classnames";

export default function Box({className, children}) {
  return (
    <div className={classNames(styles.box, className)}>
      {children}
    </div>
  );
}
