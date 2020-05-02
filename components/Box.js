import styles from "./Box.module.css";

export default class Box extends React.Component {
  render() {
    return <div className={styles.box}>{this.props.children}</div>;
  }
}
