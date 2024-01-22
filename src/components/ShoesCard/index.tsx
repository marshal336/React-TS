import React from "react";
import styles from "./ShoesCard.module.scss";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { VscChromeClose } from "react-icons/vsc";
import { ShoesLogo } from "../../assets/img";
import { useSelector } from "react-redux";
import { RootState, useAppDispatсh } from "../../redux/store";
import {
  addCardTo,
  minusTo,
  removeItem,
} from "../../redux/slices/getCardShoesSlice";
interface ShoesCardProps {
  id: number;
  logo?: string;
  title: string;
  subTitle: string;
  price: number[];
  description: string;
  category?: number;
  count: number;
}

const ShoesCard = ({
  id,
  logo,
  title,
  subTitle,
  price,
  description,
  category,
  count,
}: ShoesCardProps) => {
  const dispatch = useAppDispatсh();
  const addItem = () => {
    dispatch(addCardTo({ id } as ShoesCardProps));
  };
  const deleteItem = () => {
    dispatch(minusTo({ id } as ShoesCardProps));
    if (count === 1) {
      dispatch(removeItem({ id } as ShoesCardProps));
    }
  };
  const removeItemOnArray = () => {
    dispatch(removeItem({ id } as ShoesCardProps));
  };
  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <img src={ShoesLogo} alt="" />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subTitle}>{subTitle}</div>
      </div>
      <div className={styles.price}>{price[0] * count}$</div>
      <div className={styles.count}>
        <div onClick={deleteItem} className={styles.minus}>
          <FiMinus />
        </div>
        <div className={styles.counter}>{count}</div>
        <div onClick={addItem} className={styles.plus}>
          <FaPlus />
        </div>
      </div>
      <div onClick={removeItemOnArray} className={styles.delete}>
        <VscChromeClose />
      </div>
    </div>
  );
};

export default ShoesCard;
