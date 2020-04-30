import styles from "./NavItem.module.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.scroll = this.scroll.bind(this);
  }

  scroll(ref) {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  render() {
    return (
      <li
        className={styles.navIcon}
        onClick={() => this.scroll(this.props.reference)}
      >
        {/* {this.props.name} */}
        <FontAwesomeIcon icon={this.props.icon} />
      </li>
    );
  }
}
