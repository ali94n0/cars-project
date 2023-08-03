import Back from "@/components/icons/Back";
import styles from "./BackBtn.module.css";

function BackBtn({ route }) {
  const clickHandler = () => {
    route.back();
  };

  return (
    <div onClick={clickHandler} className={styles.back}>
      <Back />
      <p>Back</p>
    </div>
  );
}

export default BackBtn;
