import React from "react";

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
    console.log("click");
    this.aboutRef.current.scrollIntoView();
  }

  render() {
    return (
      <div>
        <li ref={this.aboutRef} onClick={this.scroll}>
          About
        </li>
        <li ref={this.projectsRef} onClick={this.scroll}>
          Projects
        </li>
        <li ref={this.cvRef} onClick={this.scroll}>
          CV
        </li>
        <li ref={this.contactRef} onClick={this.scroll}>
          Contact
        </li>
      </div>
    );
  }
}
