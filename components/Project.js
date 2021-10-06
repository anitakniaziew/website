import React from "react";
import Image from "next/image";
import Box from "./Box.js";
import Tech from "./Tech.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

import styles from "./Project.module.css";

export default function Project({href, img, name, description, git, stacks}) {
  return (
    <Box className={styles.project}>
      <a href={href} target="_blank">
        <Image src={img} className={styles.projectImg} width="400px" height="300px" />
      </a>
      <div className={styles.details}>
        <h2>{name}</h2>
        <p>{description}</p>
        <a href={git} target="_blank">
          <FontAwesomeIcon
            icon={faGithubSquare}
            className={styles.gitHubIcon}
          ></FontAwesomeIcon>
          {git.replace("https://github.com/", "")}
        </a>
        <ul className={styles.techList}>
          {stacks.map((tech) => (
            <Tech key={tech} id={tech}></Tech>
          ))}
        </ul>
      </div>
    </Box>
  );
}
