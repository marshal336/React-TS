import React from "react";
import styles from "./ShoesComponent.module.scss";
import { ShoesLogo } from "../../../assets/img";
import { RootState, useAppDispatсh } from "../../../redux/store";
import { addCardTo } from "../../../redux/slices/getCardShoesSlice";
import { useSelector } from "react-redux";
import { shoesSliceProps } from "../../../redux/slices/getCardShoesSlice/types";
import CustomButton from "../../CustomButton";
interface ShoesComponentProps {
  id: number;
  logo?: string;
  title: string;
  subTitle: string;
  price: number[];
  description: string;
  category?: number;
  count: number;
}

const ShoesComponent = ({
  id,
  logo,
  title,
  subTitle,
  price,
  description,
  category,
  count,
}: ShoesComponentProps) => {
  const dispatch = useAppDispatсh();

  const addItem = () => {
    const items: shoesSliceProps = {
      id,
      logo,
      title,
      subTitle,
      price,
      description,
      category,
      count,
    };
    dispatch(addCardTo(items));
  };
  return (
    <div onClick={addItem} className={styles.root}>
      <div className={styles.logo}>
        <img src={ShoesLogo} alt="" />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.subTitle}>{subTitle}</p>
      <div className={styles.info}>
        <div className={styles.prices}>
          {price.map((item, index) => (
            <p
              key={index}
              className={`styles.price ${
                index === 0 ? `${styles.violet}` : `${styles.gray}`
              }`}
            >
              {item}$
            </p>
          ))}
        </div>
        <div className={styles.desc}>{description}</div>
      </div>
      <div className={styles.click}>
        <CustomButton name="Add" paddingNone="paddingNone" />
      </div>
    </div>
  );
};

export default ShoesComponent;
