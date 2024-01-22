import React from "react";
import styles from "./Categories.module.scss";
import { IoMdArrowDropdown } from "react-icons/io";
const categories: string[] = [
  "Computers",
  "Clothes",
  "Shoes",
  "Furniture",
  "Cosmetics",
  "Travel",
  "Automotive",
];

const Categories = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [indexOf, setIndexOf] = React.useState<number>(0);
  const [dropMenu, setDropMenu] = React.useState<boolean>(false);
  const clickHandler = (e: React.MouseEvent, i: number) => {
    e.preventDefault();
    setOpen(!open);
    setIndexOf(i);
  };
  return (
    <div className={styles.root}>
      <div
        onClick={() => setDropMenu(!dropMenu)}
        className={`${styles.addArrow} ${
          dropMenu ? `${styles.activeMenu}` : ""
        }`}
      >
        <h3 className={styles.title}>CATEGORIES</h3>
        <IoMdArrowDropdown className={`${styles.iconArrow}`} />
      </div>
      <ul
        className={`${styles.categoriesMenu} ${
          dropMenu ? `${styles.activeClick}` : ""
        }`}
      >
        {categories.map((name, index) => (
          <li
            onClick={(e) => clickHandler(e, index)}
            className={`${styles.liElem} 
            ${indexOf === index ? `${styles.active}` : ""}`}
            key={index}
          >
            <a href="/">{name}</a>
          </li>
        ))}
      </ul>
      <div className={styles.addition}>
        <a href="/" className={styles.help}>
          Help
        </a>
        <a href="/" className={styles.helpTwo}>
          Terms & Conditions
        </a>
      </div>
    </div>
  );
};

export default Categories;
