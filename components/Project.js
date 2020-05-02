import { render } from "react-dom";
import Box from "./Box.js";
import Tech from "./Tech.js";
import data from "../data.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Project.module.css";

export default class Project extends React.Component {
  render() {
    return (
      <Box>
        <div className={styles.project}>
          <a href={this.props.href} target="_blank">
            <img src={this.props.img} className={styles.projectImg} />
          </a>
          <div className={styles.details}>
            <h2>{this.props.name}</h2>
            <p>{this.props.description}</p>
            <a href={this.props.git} target="_blank">
              <FontAwesomeIcon
                icon={data.git.icon}
                className={styles.gitIcon}
              ></FontAwesomeIcon>
              anitakniaziew/{this.props.name}
            </a>
            <ul className={styles.techList}>
              {this.props.stacks.map((tech) => (
                <Tech key={tech.name} name={tech.name} icon={tech.icon}></Tech>
              ))}
            </ul>
          </div>
        </div>
      </Box>
    );
  }
}
