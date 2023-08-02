import Location from "@/components/icons/Location";
import React from "react";
import styles from "./Card.module.css";

function Card(props) {
  const { name, model, year, distance, image, price, location } = props;
  return (
    <div className={styles.container}>
      <img src={image} alt={name} className={styles.image} />
      <h3 className={styles.title}>{`${name} ${model}`}</h3>
      <p className={styles.details}>{`${year} . ${distance}`}</p>
      <div className={styles.footer}>
        <p className={styles.price}>$ {price}</p>
        <div className={styles.location}>
          <p>{location}</p>
          <Location />
        </div>
      </div>
    </div>
  );
}

export default Card;
