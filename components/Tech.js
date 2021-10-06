import styles from "./Tech.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faJsSquare,
  faHtml5,
  faCss3Alt,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const technologies = {
  js: { name: "JavaScript", icon: faJsSquare },
  html: { name: "HTML5", icon: faHtml5 },
  css: { name: "CSS", icon: faCss3Alt },
  python: { name: "Phyton", icon: faPython },
  react: { name: "React", icon: faReact },
};

export default function Tech({id}) {
  const technology = technologies[id];
  return (
    <div className={styles.techBox}>
      <FontAwesomeIcon
        icon={technology.icon}
        className={styles.techIcon}
      >
      </FontAwesomeIcon>
      {technology.name}
    </div>
  );
}
