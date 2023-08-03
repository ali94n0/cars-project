import Link from "next/link";
import React from "react";
import styles from "./AllCarsBtn.module.css";

function AllCarsBtn(props) {
  return (
    <div className={styles.container}>
      <Link href="/cars">See All Cars</Link>
    </div>
  );
}

export default AllCarsBtn;
