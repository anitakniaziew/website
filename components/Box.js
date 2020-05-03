import styles from "./Box.module.css";
import classNames from "classnames";

export default function Box(props) {
  return (
    <div className={classNames(styles.box, props.className)}>
      {props.children}
    </div>
  );
}
