import { render } from "react-dom";
import styles from "./Tech.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Tech extends React.Component {
  render() {
    return (
      <div className={styles.techBox}>
        <FontAwesomeIcon
          icon={this.props.icon}
          className={styles.techIcon}
        ></FontAwesomeIcon>
        {this.props.name}
      </div>
    );
  }
}
