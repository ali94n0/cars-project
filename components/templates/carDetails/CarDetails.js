import Calender from "@/components/icons/Calender";
import Company from "@/components/icons/Company";
import Location from "@/components/icons/Location";
import Model from "@/components/icons/Model";
import Money from "@/components/icons/Money";
import Road from "@/components/icons/Road";
import carsData from "@/data/carsDB";
import styles from "./CarDetails.module.css";

function CarDetails({ id }) {
  const selectedCar = carsData.find((car) => car.id === +id) || "";
  const { name, model, year, distance, location, price, image, description } =
    selectedCar;

  return (
    <div className={styles.container}>
      <img src={image} alt={name} className={styles.image} />
      <h1 className={styles.header}>{`${name} ${model}`}</h1>
      <div className={styles.details}>
        <div>
          <Company />
          <p>Company</p>
          <span>{name}</span>
        </div>
        <div>
          <Model />
          <p>Model</p>
          <span>{model}</span>
        </div>
        <div>
          <Calender />
          <p>Production year</p>
          <span>{year}</span>
        </div>
        <div>
          <Road />
          <p>Kms driven</p>
          <span>{distance}</span>
        </div>
      </div>
      <div className={styles.details}>
        <div>
          <Location />
          <p>Location</p>
          <span>{location}</span>
        </div>
      </div>
      <div>
        <h3 className={styles.descriptionTitle}>Extra Informatin:</h3>
        <p className={styles.descriptionText}>{description}</p>
      </div>
      <div className={styles.details}>
        <div className={styles.price}>
          <Money />
          <p>Price:</p>
          <span>{price}</span>
        </div>
      </div>
      <button className={styles.button}>Buy</button>
    </div>
  );
}

export default CarDetails;
