import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Yash Parmar</h1>
        <p className={styles.description}>
          Hello! I'm Yash Parmar. I am a full stack developer with expertise in
          the MERN stack and Next.js development.
        </p>
        <div className={styles.items}>
          <a href="mailto:ypm23032003@email.com" className={styles.contactBtn}>
            Contact Me
          </a>
          <a
            href="../../../assets/projects/yash_resume_new (12).pdf"
            className={styles.contactBtn}
            download="yash_resume_new (12).pdf"
          >
            Download CV
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/yash.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
