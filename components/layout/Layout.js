import Link from "next/link";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h2>Digi Car</h2>
          <p>buy and sell your car</p>
        </Link>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <p>digi car Next.js project | 2023</p>
      </footer>
    </>
  );
}

export default Layout;
