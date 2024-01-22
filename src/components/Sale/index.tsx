import React from "react";
import styles from "./Sale.module.scss";
import { PCLogo } from "../../assets/img";

const Sale = () => {
  
  return (
    <div className={styles.root}>
      <h1 className={styles.bigTitle}>BIG SALE 20%</h1>
      <div className={styles.info}>
        <h3 className={styles.subTitle}>the bestseller of 2022 </h3>
        <h1 className={styles.title}>
          LENNON r2d2 <br /> with NVIDIA 5090 TI
        </h1>
        <div>
          <button>Shop Now</button>
        </div>
      </div>
      <div className={styles.logo}>
        <img src={PCLogo} alt="" />
      </div>
    </div>
  );
};

export default Sale;
