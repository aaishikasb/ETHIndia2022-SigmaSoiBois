import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>

        <div className={styles.cardDiv}>

        <h1 className={styles.cardTitle}>Schema ID:</h1>
        <h1 className={styles.cardEntry}>Some Entry</h1>
        <h1 className={styles.cardTitle}>Schema Name:</h1>
        <h1 className={styles.cardEntry}>Some Entry</h1>

        </div>
      </main>

    </div>
  );
}
