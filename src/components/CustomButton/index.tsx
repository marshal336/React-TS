import React from "react";
import styles from "./CustomButton.module.scss";
type CustomButtonProps = {
  name: string;
  paddingNone?: string
};

const CustomButton = ({ name, paddingNone }: CustomButtonProps) => {
  return (
    <div className={`${styles.root} ${paddingNone}`}>
      <a onClick={e => e.preventDefault()} href="/">{name}</a>
    </div>
  );
};

export default CustomButton;
