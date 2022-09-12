import Box from "./Box.js";
import Image from "next/image";
import styles from "./About.module.css";

export default function About({reference}) {
  return (
    <div className="section" ref={reference}>
      <h1>Hi, I'm Anita!</h1>
      <Box>
        <div className={styles.about}>
          <Image src="/avatar.svg" alt="avatar" className={styles.avatar} width="200px" height="200px" />
          <div className={styles.description}>
            <p>
              Former accountant, currently exploring arcana of <strong> frontend development 🪄 🖥 </strong>while slurping <strong> ramen 🍜</strong> and learning Japanese.
            </p>
            <p>
              When I'm not coding I enjoy <strong>knitting 🧶</strong> or watching <strong> F1 🏎</strong> races!
            </p>
            <p>
              Currently on<strong> hiatus 🤰</strong>
            </p>
          </div>
        </div>
      </Box>
    </div>
  );
}
