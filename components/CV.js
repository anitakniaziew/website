import Box from "./Box.js";
import styles from "./CV.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faJsSquare,
  faHtml5,
  faCss3Alt,
  faGitSquare,
  faReact,
  faBootstrap
} from "@fortawesome/free-brands-svg-icons";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";

export default function CV(props) {
  return (
    <div className="section" ref={props.reference}>
      <h1>Experience &amp; Education</h1>
      <div className={styles.cvContainer}>
        <Box className={styles.midsection}>
          <h2 className={styles.header}>Experience</h2>
          <div className={styles.midsectionItem}>
            <p className={styles.data}>12.2020 - now</p>
            <h3>Junior Frontend Developer</h3>
            <p className={styles.place}>Visuality sp.j.</p>
          </div>
          <div className={styles.midsectionItem}>
            <p className={styles.data}>08.2020 - 11.2020</p>
            <h3>Intern Frontend Developer</h3>
            <p className={styles.place}>Visuality sp.j.</p>
          </div>
          <div className={styles.midsectionItem}>
            <p className={styles.data}>2016 - 2018</p>
            <h3>Accountant</h3>
            <p className={styles.place}>Tax Care S.A.</p>
          </div>
        </Box>
        <Box className={styles.midsection}>
          <h2 className={styles.header}>Education</h2>
          <div className={styles.midsectionItem}>
            <p className={styles.data}>2020 - 2021</p>
            <h3>Postgraduate studies: Frontend Developer with React</h3>
            <p className={styles.place}>Kozminski University in Warsaw</p>
          </div>
          <div className={styles.midsectionItem}>
            <p className={styles.data}>2012 - 2014</p>
            <h3>Master of Finance and Accounting</h3>
            <p className={styles.place}>University of Economics in Katowice</p>
          </div>
        </Box>
        <Box className={styles.midsection}>
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
                icon={faReact}
                className={styles.technologyIcon}
              />
              React
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
                icon={faTerminal}
                className={styles.technologyIcon}
              />
              Unix Shell
            </li>
            <li className={styles.technology}>
              <FontAwesomeIcon
                icon={faBootstrap}
                className={styles.technologyIcon}
              />
              Bootstrap
            </li>
          </ul>
        </Box>
        <Box className={styles.midsection}>
          <h2 className={styles.header}>Languages</h2>
          <p className={styles.flags}>
            <span>🇬🇧</span>
            <span>🇯🇵</span>
          </p>
        </Box>
      </div>
    </div>
  );
}
