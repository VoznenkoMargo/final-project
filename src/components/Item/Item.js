/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from "react";
// import PropTypes from "prop-types";
// import { HiPlus, HiMinus } from "react-icons/hi";
import styles from "./Item.module.scss";
import AddCartBtn from "../AddCartBtn/AddCartBtn";

function Item({items}) {


  // console.log(items);
  // const items = [
  //   {
  //     id: 1,
  //     img: "https://i.gifer.com/7Jdz.gif",
  //     title: "Goose",
  //     weight: "Weight: 225 g",
  //     description: "Stuffed with rice, apple, truffle and ripe cherry",
  //     price: "7 900 ₴",
  //   },
  //   {
  //     id: 2,
  //     img: "https://i.gifer.com/LS8v.gif",
  //     title: "Turkey",
  //     weight: "Weight: 225 g",
  //     description:
  //       "Stuffed with buckwheat, dried apricots, orange and green apple",
  //     price: "450 ₴",
  //   },
  // ];

  // const itemsAdded = [
  //   {
  //     id: 1,
  //     img: "https://i.gifer.com/7Jdz.gif",
  //     title: "Goose",
  //     weight: "Weight: 225 g",
  //     description: "Stuffed with rice, apple, truffle and ripe cherry",
  //     price: "7 900 ₴",
  //   },
  //   {
  //     id: 2,
  //     img: "https://i.gifer.com/LS8v.gif",
  //     title: "Turkey",
  //     weight: "Weight: 225 g",
  //     description:
  //       "Stuffed with buckwheat, dried apricots, orange and green apple",
  //     price: "450 ₴",
  //   },
  // ];

  return (
    <div className={styles.container}>
      {items.map((item) => (
        <div className={styles.item} key={item._id}>
          <img src={item.imageUrls} alt="dish" />

          <div>
            <div className={styles.mainInfo}>
              <div className={styles.title}>{item.name}</div>
              <div className={styles.weight}>{item.weight} </div>
            </div>

            {/* <p className={styles.description}>{item.description}</p> */}
          </div>

          <div className={styles.priceInfo}>
            <h2 className={styles.price}>{item.currentPrice}</h2>
            <AddCartBtn />
          </div>
        </div>
      ))}

      {/* {itemsAdded.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.dishCount}>
            <p>3</p>
          </div>
          <img src={item.img} alt="dish" />
          <div>
            <div className={styles.mainInfo}>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.weight}>{item.weight} </div>
            </div>

            <p className={styles.description}>{item.description}</p>
          </div>

          <div className={styles.priceInfo}>
            <div className={styles.plus}>
              <HiPlus />
            </div>
            <h2 className={styles.price}>{item.price}</h2>
            <div className={styles.minus}>
              <HiMinus />
            </div>
          </div>
        </div>
      ))} */}
    </div>
  );
}

export default Item;
