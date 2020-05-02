import Box from "./Box.js";
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
      <h1>Experience &amp; Education</h1>
      <div className={styles.cvContainer}>
        <div className={styles.midsection}>
          <Box>
            <h2 className={styles.header}>Experience</h2>
            <p className={styles.data}>2016 - 2018</p>
            <p>Accountant</p>
            <p className={styles.place}>Tax Care S.A.</p>
          </Box>
        </div>
        <div className={styles.midsection}>
          <Box>
            <h2 className={styles.header}>Education</h2>
            <p className={styles.data}>2012 - 2014</p>
            <p>Master of Finance and Accounting</p>
            <p className={styles.place}>University of Economics in Katowice</p>
          </Box>
        </div>
        <div className={styles.midsection}>
          <Box>
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
                <FontAwesomeIcon
                  icon={faHtml5}
                  className={styles.technologyIcon}
                />
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
          </Box>
        </div>
        <div className={styles.midsection}>
          <Box>
            <h2 className={styles.header}>Languages</h2>
            <li>English B2</li>
            <li>Japanese </li>
          </Box>
        </div>
      </div>
    </div>
  );
}
