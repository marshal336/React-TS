import React from "react";
import Categories from "../../components/Categories";
import styles from "./Home.module.scss";
import Sale from "../../components/Sale";
import ShoesBlock from "../../components/ShoesBlock";
import Santa from "../../components/Santa";
import ShoesComponentTwo from "../../components/ShoesBlock/ShoesComponentTwo";

const Home = () => {
  return (
    <div className={styles.root}>
      <section className={styles.categorySort}>
        <Categories />
        <Sale />
      </section>
      <section>
        <ShoesBlock title="Trending" />
        <ShoesComponentTwo />
      </section>
      <section>
        <Santa />
      </section>
      <section >
        <ShoesBlock title="Less than 100$" />
      </section>
    </div>
  );
};

export default Home;
