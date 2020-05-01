import styles from "./CV.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faJsSquare,
  faHtml5,
  faCss3Alt,
  faGitSquare,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";

export default function CV(props) {
  return (
    <div className="section" ref={props.reference}>
      <h1>Some CV stuff</h1>
      <div className={styles.midsection}>
        <h2 className={styles.header}>Experience</h2>
        <div>
          <p className={styles.data}>2016-08 - 2018-04</p>
          <p>Accountant at Tax Care S.A.</p>
        </div>
      </div>
      <div className={styles.midsection}>
        <h2 className={styles.header}>Education</h2>
        <div>
          <p className={styles.data}>2012-2014</p>
          <p>
            Master of Finance and Accounting, University of Economics in
            Katowice
          </p>
        </div>
      </div>
      <div className={styles.midsection}>
        <h2 className={styles.header}>Skills</h2>
        <ul className={styles.skills}>
          <li className={styles.technology}>
            <FontAwesomeIcon
              icon={faJsSquare}
              className={styles.technologyIcon}
            />
            JavaScript
          </li>
          <li className={styles.technology}>
            <FontAwesomeIcon icon={faHtml5} className={styles.technologyIcon} />
            HTML5
          </li>
          <li className={styles.technology}>
            <FontAwesomeIcon
              icon={faCss3Alt}
              className={styles.technologyIcon}
            />
            CSS
          </li>
          <li className={styles.technology}>
            <FontAwesomeIcon
              icon={faGitSquare}
              className={styles.technologyIcon}
            />
            Git
          </li>
          <li className={styles.technology}>
            <FontAwesomeIcon
              icon={faPython}
              className={styles.technologyIcon}
            />
            Python
          </li>
          <li className={styles.technology}>
            <FontAwesomeIcon
              icon={faTerminal}
              className={styles.technologyIcon}
            />
            Unix Shell
          </li>
        </ul>
      </div>
      <div className={styles.midsection}>
        <h2 className={styles.header}>Languages</h2>
        <li>English B2</li>
        <li>Japanese </li>
      </div>
    </div>
  );
}
