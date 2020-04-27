import React from "react";
import styles from "./Nav.module.css";

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.aboutRef = React.createRef();
    this.contactRef = React.createRef();
    this.projectsRef = React.createRef();
    this.cvRef = React.createRef();
    this.scroll = this.scroll.bind(this);
  }

  scroll() {
    this.aboutRef.current.scrollIntoView();
  }

  render() {
    return (
      <div className={styles.nav}>
        <li className={styles.link} ref={this.aboutRef} onClick={this.scroll}>
          About
        </li>
        <li
          className={styles.link}
          ref={this.projectsRef}
          onClick={this.scroll}
        >
          Projects
        </li>
        <li className={styles.link} ref={this.cvRef} onClick={this.scroll}>
          CV
        </li>
        <li className={styles.link} ref={this.contactRef} onClick={this.scroll}>
          Contact
        </li>
      </div>
    );
  }
}
