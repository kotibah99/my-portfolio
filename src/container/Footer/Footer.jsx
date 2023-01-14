import { AiFillGithub } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";

import styles from "./Footer.module.css";
import { IconLink } from "../../components/UI/IconLink/IconLink";

export const Footer = () => {
  return (
    <footer className={`${styles.container} grid`}>
      <div>
        <h1 className={styles.title}>kotibah Mohamad</h1>
        <span className={styles.subtitle}>Frontend Developer</span>
      </div>

      <ul className={styles.links}>
        <li>
          <a href="#services" className={styles.link}>
            Services
          </a>
        </li>
        <li>
          <a href="#portfolio" className={styles.link}>
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contactme" className={styles.link}>
            Contact Me
          </a>
        </li>
      </ul>

      <div className={styles.socials}>
        <IconLink
          to="https://www.facebook.com/profile.php?id=100006945972019"
          Icon={FaFacebookF}
          isExternal={true}
          className={styles.icon}
          aria-label="logo facebook"
        />
        <IconLink
          to="https://github.com/kotibah99"
          Icon={AiFillGithub}
          isExternal={true}
          className={styles.icon}
          aria-label="logo github"
        />
        <IconLink
          to="https://www.linkedin.com/in/kotibah-mohamad-7bb4b2186"
          Icon={GrLinkedinOption}
          isExternal={true}
          className={styles.icon}
          aria-label="logo linkedin"
        />
      </div>

      <p className={styles.copy}>&#169; All right reserved</p>
    </footer>
  );
};
