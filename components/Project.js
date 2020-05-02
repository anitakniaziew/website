import { render } from "react-dom";
import Tech from "./Tech.js";
import styles from "./Project.module.css";

export default class Project extends React.Component {
  render() {
    return (
      <div className={styles.project}>
        <img src={this.props.img} className={styles.projectImg} />
        <div className={styles.details}>
          <h2>{this.props.name}</h2>
          <p>{this.props.description}</p>
          <ul className={styles.techList}>
            {this.props.stacks.map((tech) => (
              <Tech key={tech.name} name={tech.name} icon={tech.icon}></Tech>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
