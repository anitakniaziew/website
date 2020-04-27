import React from "react";
import styles from "./NavItem.module.css";

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.scroll = this.scroll.bind(this);
  }

  scroll(ref) {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }

  render() {
    return (
      <li
        className={styles.link}
        onClick={() => this.scroll(this.props.reference)}
      >
        {this.props.name}
      </li>
    );
  }
}
