import React from "react";
import styles from "./Favorites.module.scss";
import Header from "../../components/Header";
import Categories from "../../components/Categories";
import ShoesCard from "../../components/ShoesCard";
import { useSelector } from "react-redux";
import { RootState, useAppDispatсh } from "../../redux/store";
import CustomButton from "../../components/CustomButton";
import { deleteAll } from "../../redux/slices/getCardShoesSlice";

const Favorite = () => {
  const dispatch = useAppDispatсh();
  const { item, totalPrice } = useSelector((state: RootState) => state.addCard);
  const removell = () => {
    dispatch(deleteAll())
  };

  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.flex}>
        <Categories />
        <main className={styles.main}>
          {item.map((i, index) => (
            <ShoesCard key={index} {...i} />
          ))}
          <div className={styles.info}>
            <div className={styles.price}>TOTAL PRICE: {totalPrice}$</div>
            <div className={styles.btn} onClick={removell}>
              <CustomButton name="Delete All" paddingNone="paddingNone" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Favorite;
