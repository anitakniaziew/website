import styles from "./Contact.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contact(props) {
  return (
    <div className="section" ref={props.reference}>
      <h1>Contact</h1>
      <div className={styles.contactList}>
        <a href="mailto:@gmail.com">
          <FontAwesomeIcon className={styles.contactIcon} icon={faInbox} />
        </a>
        <a href="https://github.com/anitakniaziew">
          <FontAwesomeIcon
            className={styles.contactIcon}
            icon={faGithubSquare}
          />
        </a>
        <a href="https://www.linkedin.com/in/anita- kowalska-349400a4">
          <FontAwesomeIcon className={styles.contactIcon} icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
}
