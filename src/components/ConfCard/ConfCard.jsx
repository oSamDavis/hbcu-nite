import React from "react";
import styles from "./ConfCard.scss";

const ConfCard = ({ image, title }) => {
  return (
    <div className={styles.component}>
      <div className={styles.frame41} />
      <p className={styles.shrineBowl}>{title}</p>
      <img src={image} className={styles.frame41} atl={title} />
    </div>
  );
};

export default ConfCard;
