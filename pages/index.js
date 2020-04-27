import Header from "../components/Header.js";
import NavItem from "../components/NavItem.js";
import About from "../components/About.js";
import Contact from "../components/Contact.js";
import CV from "../components/CV.js";
import Projects from "../components/Projects.js";
import React from "react";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.aboutRef = React.createRef();
    this.contactRef = React.createRef();
    this.projectsRef = React.createRef();
    this.cvRef = React.createRef();
  }

  render() {
    return (
      <div className="container">
        <Header>
          <NavItem name="About" reference={this.aboutRef}></NavItem>
          <NavItem name="Projects" reference={this.projectsRef}></NavItem>
          <NavItem name="CV" reference={this.cvRef}></NavItem>
          <NavItem name="Contact" reference={this.contactRef}></NavItem>
        </Header>
        <main>
          <About reference={this.aboutRef} />
          <Projects reference={this.projectsRef} />
          <CV reference={this.cvRef} />
          <Contact reference={this.contactRef} />
        </main>
      </div>
    );
  }
}
