import Box from "./Box.js";
import styles from "./Contact.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contact({reference}) {
  return (
    <div className="section" ref={reference}>
      <h1>Contact</h1>
      <div className={styles.contactList}>
        <Box>
          <a
            href="mailto:anita@kowalska.dev"
            target="_blank"
            className={styles.iconBox}
          >
            <FontAwesomeIcon className={styles.contactIcon} icon={faInbox} />
          </a>
          <a
            href="https://github.com/anitakniaziew"
            target="_blank"
            className={styles.iconBox}
          >
            <FontAwesomeIcon
              className={styles.contactIcon}
              icon={faGithubSquare}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/anita-kowalska-349400a4"
            target="_blank"
            className={styles.iconBox}
          >
            <FontAwesomeIcon className={styles.contactIcon} icon={faLinkedin} />
          </a>
        </Box>
      </div>
    </div>
  );
}
