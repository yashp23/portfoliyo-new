import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Yash Parmar</h1>
        <p className={styles.description}>
        Hello! I'm Yash Parmar. I am a full stack developer with expertise in the MERN stack and Next.js development.
        </p>
        <a href="mailto:ypm23032003@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <a
          href="/path/to/your-cv.pdf"
          className={styles.contactBtn}
          download="Het_Patel_CV.pdf"
        >
          Download CV
        </a>
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
