import Box from "./Box.js";
import Image from "next/image";
import styles from "./About.module.css";

export default function About(props) {
  return (
    <div className="section" ref={props.reference}>
      <h1>Hi, I'm Anita!</h1>
      <Box>
        <div className={styles.about}>
          <Image src="/avatar.svg" alt="avatar" className={styles.avatar} width="200px" height="200px" />
          <div className={styles.description}>
            <p>
              After five years of working as an accountant 💰, I've decided to
              change my life and{" "}
              <strong>start a career as a programmer 🖥.</strong>
            </p>
            <p>
              I am a home-learner, taking online courses, in the meantime
              working on my first projects.
            </p>
            <p>
              In my free time I like to <strong>learn Japanese 🍡</strong> and
              do some <strong>knitting 🧶!</strong>
            </p>
          </div>
        </div>
      </Box>
    </div>
  );
}
