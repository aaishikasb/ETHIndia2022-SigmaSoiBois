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

        <h1 className={styles.subtitle}>Offer Claim</h1>

        <form className={styles.form} action="/send-data-here" method="post">
          <label className={styles.label} for="discord">
            Discord ID:
          </label>
          <br />
          <input
            className={styles.inputBox}
            type="text"
            id="discord"
            name="discord"
          />
          <br />
          <label className={styles.label} htmlFor="role">
            Contributor Role:
          </label>
          <br />
          <input
            className={styles.inputBox}
            type="text"
            id="role"
            name="role"
          />
          <br />
          <label className={styles.label} htmlFor="num">
            Number of Contributions:
          </label>
          <br />
          <input className={styles.inputBox} type="text" id="num" name="num" />
          <br />
          <button className={styles.submit} type="submit">
            Offer Claim 🏆
          </button>
        </form>
      </main>
    </div>
  );
}
