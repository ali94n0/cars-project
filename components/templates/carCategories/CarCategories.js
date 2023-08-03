import Back from "@/components/icons/Back";
import Card from "@/components/modules/card/Card";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./CarCategories.module.css";
import BackBtn from "@/components/modules/backBtn/BackBtn";

function CarCategories({ data }) {
  const route = useRouter();

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

export default CarCategories;
