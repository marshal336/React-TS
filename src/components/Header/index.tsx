import React from "react";
import styles from "./Header.module.scss";
import { IoMdClose } from "react-icons/io";
import {
  HeaderLogo$,
  HeaderLogoBasket,
  HeaderLogoHeart,
  HeaderLogoTitle,
} from "../../assets/icons";
import { CiSearch } from "react-icons/ci";
import MenuBurgerButton from "../MenuBurgerButton";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Header = () => {
  const { cout, setHidden } = useSelector((state: RootState) => state.addCard);
  const [seeValue, setSeeValue] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);
  const value = (value: React.ChangeEvent<HTMLInputElement>) => {
    setSeeValue(value.target.value);
    console.log(value.target.value);
  };
  const clearValue = () => {
    setSeeValue("");
    inputRef.current?.focus();
  };

  return (
    <header className={styles.root}>
      <Link to="/" className={styles.icons}>
        <img src={HeaderLogo$} alt="" />
        <img src={HeaderLogoTitle} alt="" />
      </Link>
      <div className={styles.account}>
        <div className={styles.circle}></div>
        <div className={styles.name}>Vlad Marshal</div>
      </div>
      <div className={styles.inputBlock}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search for anything..."
          onChange={value}
          value={seeValue}
        />
        <CiSearch className={styles.searchIcon} />
        {seeValue && <IoMdClose onClick={clearValue} className={styles.clear} />}
      </div>
      <div className={styles.favorites}>
        <div className={styles.decor}>
          {setHidden && <p>{cout}</p>}
          <Link to="/favorite">
            <img src={HeaderLogoHeart} alt="" />
          </Link>
        </div>
        <img src={HeaderLogoBasket} alt="" />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Link to="/login">
          <Button style={{ background: "#6C3EB8" }} type="primary">
            Log In
          </Button>
        </Link>
        <Link to="/register">
          <Button style={{ background: "#6C3EB8" }} type="primary">
            Register
          </Button>
        </Link>
      </div>
      <MenuBurgerButton />
    </header>
  );
};

export default Header;
