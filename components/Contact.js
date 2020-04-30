import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contact(props) {
  return (
    <div className="section" ref={props.reference}>
      <h1>Contact</h1>
      <FontAwesomeIcon icon={faInbox} />
      <h2>anita.kniaziew@gmail.com</h2>
      <FontAwesomeIcon icon={faGithubSquare} />
      <h2>https://github.com/anitakniaziew</h2>
      <FontAwesomeIcon icon={faLinkedin} />
      <h2>https://www.linkedin.com/in/anita- kowalska-349400a4</h2>
    </div>
  );
}
