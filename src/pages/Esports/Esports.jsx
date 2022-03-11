import React from "react";
// import { ChevronBackward } from "components";
import styles from "./Esports.scss";

const Esports = () => {
  return (
    <div className={styles.macBookPro142}>
      <div className={styles.frame23}>
        {/* <ChevronBackward className={styles.chevronBackward} /> */}
        <p className={styles.gameHub}>Game Hub</p>
      </div>
      <div className={styles.frame29}>
        <div className={styles.frame25}>
          <img
            alt=""
            className={styles.image66}
            src="https://static.overlay-tech.com/assets/3a8c16b2-8af0-48f4-91cb-a88171064400.png"
          />
          <p className={styles.eaSports}>EA Sports</p>
        </div>
        <div className={styles.frame26}>
          <img
            alt=""
            className={styles.image72}
            src="https://static.overlay-tech.com/assets/6866abba-129f-48d2-ab41-be8630fa0f8b.png"
          />
          <p className={styles.eaSports}>Tournaments</p>
        </div>
        <div className={styles.frame27}>
          <img
            alt=""
            className={styles.image73}
            src="https://static.overlay-tech.com/assets/0c5e434c-e5dc-4997-8e10-e7ed7ba7f181.png"
          />
          <p className={styles.eaSports}>Bowl Games</p>
        </div>
      </div>
    </div>
  );
};

export default Esports;