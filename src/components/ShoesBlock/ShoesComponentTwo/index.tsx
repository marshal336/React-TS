import React from "react";
import styles from "./ShoesComponentTwo.module.scss";
import { ShoesLogoTwo } from "../../../assets/img";

const ShoesComponentTwo = () => {
  return (
    <div className={styles.root}>
      <h3 className={styles.title}>Worth seeing</h3>
      <div className={styles.flex}>
        {[...new Array(5)].map((_, index) => (
          <div key={index} className={styles.cards}>
            <img src={ShoesLogoTwo} alt="" />
            <h3>Sneakers</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoesComponentTwo;
