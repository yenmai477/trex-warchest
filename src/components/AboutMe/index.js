import React from "react";
import clsx from "clsx";
import Image from "@theme/IdealImage";
import styles from "./AboutMe.module.scss";

const HomepageAboutMe = ({ avatar, descriptionComponent }) => {
  return (
    <div className="margin-top--lg">
      <h2>About me</h2>
      <div className="row">
        <div className={clsx("col col--5", styles.avatarContainer)}>
          <div className={styles.avatar}>
            <Image img={avatar} />
          </div>
        </div>
        <div className="col col--6">{descriptionComponent}</div>
      </div>
    </div>
  );
};

export default HomepageAboutMe;
