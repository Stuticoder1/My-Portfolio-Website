import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Stuti Gupta</h1>
        <p className={styles.description}>
          I'm a full-stack developer with a passion for building
          bridges between the digital and physical worlds, one pixel
          at a time.using React and NodeJS with creating a Database 
          with it.Reach out if you would like to learn more!
        </p>
        <a href="mailto:stuticoder123@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};