import React from "react";
import styles from "./Santa.module.scss";
import CustomButton from "../CustomButton";
import { GamePad, OneShoeLogo, SantaLogo } from "../../assets/img";

const Santa = () => {
  return (
    <div className={styles.root}>
      <div className={styles.info}>
        <div className={styles.logoShoe}>
          <img src={OneShoeLogo} alt="" />
        </div>
        <h1>
          NEW YEAR <br /> <span>SALE</span>
        </h1>
        <CustomButton name="See more" paddingNone="paddingNone" />
        <div className={styles.logoGamePad}>
          <img src={GamePad} alt="" />
        </div>
      </div>
      <div className={styles.logo}>
        <img src={SantaLogo} alt="" />
      </div>
    </div>
  );
};

export default Santa;
