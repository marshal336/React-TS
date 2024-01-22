import React from "react";
import styles from "./ShoesBlock.module.scss";
import CustomButton from "../CustomButton";
import ShoesComponent from "./ShoesComponentOne";
import { useSelector } from "react-redux";
import { RootState, useAppDispatсh } from "../../redux/store";
import { fetchShoes } from "../../redux/slices/shoesSlice";
type ShoesBlock = {
  title: string;
};

const ShoesBlock = ({ title }: ShoesBlock) => {
  const dispach = useAppDispatсh();
  const { items } = useSelector((state: RootState) => state.shoes);

  React.useEffect(() => {
    dispach(fetchShoes());
  }, []);
  const handleClickMoreItems = (e: React.MouseEvent) => {
    e.preventDefault();
  };
  const clickHandler = () => {};

  return (
    <>
      <div onClick={clickHandler} className={styles.root}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.shoesFlexBlock}>
          {items.map((item, i) => (
            <>
              <ShoesComponent key={i} {...item} />
            </>
          ))}
        </div>
        <div className={styles.button}>
          <a href="/" onClick={handleClickMoreItems}>
            <CustomButton paddingNone={"paddingNone"} name={"See more"} />
          </a>
        </div>
      </div>
    </>
  );
};

export default ShoesBlock;
