import React from "react";
import clsx from "clsx";
import styles from "./SocialLinks.module.scss";

const SocialLinks = ({ data }) => {
  const socialLinksComponents = data.map(({ name, url, svg }) => (
    <div className={clsx("col", styles.col)} key={name}>
      <a
        href={url}
        target="_blank"
        className={clsx("button button--outline button--primary", styles.btn)}
      >
        <span className={styles.btnIcon}>{svg}</span>
        <span className={styles.btnText}>{name}</span>
      </a>
    </div>
  ));

  return (
    <div className={styles.socialContainer}>
      <h2>Social media</h2>
      <div className={clsx("row", styles.socialLinks)}>
        {socialLinksComponents}
      </div>
    </div>
  );
};

export default SocialLinks;
