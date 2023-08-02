import Card from "@/components/modules/card/Card";
import React from "react";
import styles from "./CarsPage.module.css";
import Link from "next/link";

function CarsPage({ data }) {
  return (
    <div className={styles.container}>
      {data.map((car) => (
        <Link href={`/cars/${car.id}`}>
          <Card key={car.id} {...car} />
        </Link>
      ))}
    </div>
  );
}

export default CarsPage;
