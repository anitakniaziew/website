import Header from "../components/Header.js";
import NavItem from "../components/NavItem.js";
import About from "../components/About.js";
import Contact from "../components/Contact.js";
import CV from "../components/CV.js";
import Projects from "../components/Projects.js";
import React from "react";
import {
  faUser,
  faBriefcase,
  faClone,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

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
          <NavItem
            // name="About"
            reference={this.aboutRef}
            icon={faUser}
          ></NavItem>
          <NavItem
            // name="Projects"
            reference={this.projectsRef}
            icon={faClone}
          ></NavItem>
          <NavItem
            // name="CV"
            reference={this.cvRef}
            icon={faBriefcase}
          ></NavItem>
          <NavItem
            // name="Contact"
            reference={this.contactRef}
            icon={faPaperPlane}
          ></NavItem>
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
