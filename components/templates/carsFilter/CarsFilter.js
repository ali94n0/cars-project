import Card from "@/components/modules/card/Card";
import styles from "./CarsFilter.module.css";
import BackBtn from "@/components/modules/backBtn/BackBtn";
import Link from "next/link";

function CarsFilter({ data, route }) {
  return (
    <div className={styles.container}>
      <BackBtn route={route} />
      <div className={styles.cards}>
        {data.map((car) => (
          <Link href={`/cars/${car.id}`} key={car.id}>
            <Card {...car} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CarsFilter;
