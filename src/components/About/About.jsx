import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} className="" alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3 className={styles.HeaderItem} >Full stack Developer</h3>
              <p>
              Hello! I'm Yash Parmar. I am a full stack developer with expertise in the MERN stack and Next.js development. I am also familiar with Docker and Jenkins. I have a passion for technology and enjoy exploring new advancements in the field. In addition to my technical skills, I am always eager to learn and adopt new tools and frameworks that can improve my workflow and the quality of my projects. I thrive in collaborative environments and enjoy working on innovative solutions that can make a real impact.
              </p>
            </div>
          </li>
          {/* <li className={styles.aboutItem}>
            <img src={getImageUrl("about/")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li> */}
        </ul>
      </div>
    </section>
  );
};
