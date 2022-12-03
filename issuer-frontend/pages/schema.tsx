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

        <h1 className={styles.subtitle}>Create Schema</h1>

        <form className={styles.form} action="/send-data-here" method="post">
          <label className={styles.label} htmlFor="name">
            Name:
          </label>
          <br />
          <input
            className={styles.inputBox}
            type="text"
            id="name"
            name="name"
          />
          <br />
          <label className={styles.label} htmlFor="expiry">
            Mandatory Expiry:
          </label>
          <br />
          <input
            className={styles.inputBox}
            type="text"
            id="expiry"
            name="expiry"
          />
          <br />
          <label className={styles.label} htmlFor="atribs">
            Attributes:
          </label>
          <br />
          <input
            className={styles.inputBox}
            type="text"
            id="atribs"
            name="atribs"
          />
          <br />
          <button className={styles.submit} type="submit">
            Create Schema 📜
          </button>
        </form>
        <label>
          View{" "}
          <a className={styles.link} href="/list">
            Past Schemas
          </a>
          .
        </label>
      </main>
    </div>
  );
}
