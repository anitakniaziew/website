import React from "react";
import Image from "next/image";
import Box from "./Box.js";
import Tech from "./Tech.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

import styles from "./Project.module.css";

export default class Project extends React.Component {
  render() {
    return (
      <Box className={styles.project}>
        <a href={this.props.href} target="_blank">
          <Image src={this.props.img} className={styles.projectImg} width="400px" height="300px" />
        </a>
        <div className={styles.details}>
          <h2>{this.props.name}</h2>
          <p>{this.props.description}</p>
          <a href={this.props.git} target="_blank">
            <FontAwesomeIcon
              icon={faGithubSquare}
              className={styles.gitHubIcon}
            ></FontAwesomeIcon>
            {this.props.git.replace("https://github.com/", "")}
          </a>
          <ul className={styles.techList}>
            {this.props.stacks.map((tech) => (
              <Tech key={tech} id={tech}></Tech>
            ))}
          </ul>
        </div>
      </Box>
    );
  }
}
