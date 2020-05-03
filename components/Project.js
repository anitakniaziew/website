import { render } from "react-dom";
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
          <img src={this.props.img} className={styles.projectImg} />
        </a>
        <div className={styles.details}>
          <h2>{this.props.name}</h2>
          <p>{this.props.description}</p>
          <a href={this.props.git} target="_blank">
            <FontAwesomeIcon
              icon={faGithubSquare}
              className={styles.gitHubIcon}
            ></FontAwesomeIcon>
            anitakniaziew/{this.props.name}
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
