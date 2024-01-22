import React from "react";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { HeaderLogo$, HeaderLogoTitle } from "../../assets/icons";
import { IoLogoInstagram } from "react-icons/io";
import { AiOutlineYoutube } from "react-icons/ai";
import { LiaFacebookSquare } from "react-icons/lia";

const Footer = () => {
  return (
    <footer className={styles.root}>
      <Link to="/" className={styles.icons}>
        <img src={HeaderLogo$} alt="" />
        <img src={HeaderLogoTitle} alt="" />
      </Link>
      <h4 className={styles.dev}>
        Developer by <span>Marshal</span>
      </h4>
      <div className={styles.iconBlock}>
        <IoLogoInstagram />
        <AiOutlineYoutube />
        <LiaFacebookSquare />
      </div>
    </footer>
  );
};

export default Footer;
