import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./SearchBar.module.css";

function SearchBar(props) {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const route = useRouter();

  const searchHandler = () => {
    if (min && max) {
      route.push(`/filter/${min}/${max}`);
    } else {
      toast.error("Enter Min & Max Price please!", {
        position: "top-center",
      });
    }
  };
  return (
    <>
      <ToastContainer />
      <div className={styles.container}>
        <div>
          <input
            type="number"
            placeholder="Enter Min-price..."
            value={min}
            onChange={(e) => setMin(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter Max-price..."
            value={max}
            onChange={(e) => setMax(e.target.value)}
          />
        </div>
        <button onClick={searchHandler}>Search</button>
      </div>
    </>
  );
}

export default SearchBar;
