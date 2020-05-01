import styles from "./About.module.css";

export default function About(props) {
  return (
    <div className="section" ref={props.reference}>
      <h1>Hi, I'm Anita!</h1>
      <div className={styles.about}>
        <img src="/avatar.svg" alt="avatar" className={styles.avatar} />
        <p className={styles.description}>
          After five years of working as an accountant, I've decided to change
          my life and start a career as a programmer. I am a home-learner,
          taking online courses, in the meantime working on my first small
          projects.
        </p>
      </div>
    </div>
  );
}
