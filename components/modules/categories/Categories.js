import Hatchback from "@/components/icons/Hatchback";
import Sedan from "@/components/icons/Sedan";
import Sport from "@/components/icons/Sport";
import Suv from "@/components/icons/Suv";
import Link from "next/link";
import styles from "./Categories.module.css";

function Categories(props) {
  return (
    <div className={styles.container}>
      <Link href="/categories/sedan">
        <div>
          <p>Sedan</p>
          <Sedan />
        </div>
      </Link>
      <Link href="/categories/suv">
        <div>
          <p>SUV</p>
          <Suv />
        </div>
      </Link>
      <Link href="/categories/hatchback">
        <div>
          <p>HatchBack</p>
          <Hatchback />
        </div>
      </Link>
      <Link href="/categories/sport">
        <div>
          <p>Sport</p>
          <Sport />
        </div>
      </Link>
    </div>
  );
}

export default Categories;
