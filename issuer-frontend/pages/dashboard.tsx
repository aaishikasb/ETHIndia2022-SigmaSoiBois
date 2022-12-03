import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SigmaZK</title>
        <meta
          name="description"
          content="Polygon ID integration with Collab.Land"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className={styles.polyGrad}>SigmaZK</span>
        </h1>
        <br />
        <br />
        <a className={styles.buttonlink} href="/schema">
          <button className={styles.submit2} type="submit">
            Create Schema 📜
          </button>
        </a>
        <br />
        <br />
        <a className={styles.buttonlink} href="/claim">
          <button className={styles.submit2} type="submit">
            Offer Claim 🏆
          </button>
        </a>
      </main>
    </div>
  );
}
