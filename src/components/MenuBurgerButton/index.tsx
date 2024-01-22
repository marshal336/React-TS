import React from "react";
import styles from './MenuBurgerButton.module.scss'

const MenuBurgerButton = () => {
  const [close, setClose] = React.useState<boolean>(false)
  return (
    <div onClick={() => setClose(!close)} className={styles.root}>
      <span className={`${styles.item} ${close ? `${styles.active}` : ''} `}></span>
      <span className={`${styles.item} ${close ? `${styles.active}` : ''} `}></span>
      <span className={`${styles.item} ${close ? `${styles.active}` : ''} `}></span>
    </div>
  );
};

export default MenuBurgerButton;
