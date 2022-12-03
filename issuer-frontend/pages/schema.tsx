import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { createSchema, signInUser } from "../services/api";
import styles from "../styles/Home.module.css";

export default function Home() {
  const router = useRouter();

  const submitHandler = async (event: Event) => {
    event.preventDefault();
    const schema = event.target?.schema?.value;
    const mandatoryExpiration = event.target?.mandatoryExpiration?.value;
    const attributes = event.target?.attributes?.value;
    console.log(schema, mandatoryExpiration, attributes);
    const result = await createSchema(schema, mandatoryExpiration, attributes);
    if (result) {
      router.push("/list");
    } else {
      router.push("/schema");
    }
  };
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

        <form className={styles.form} onSubmit={submitHandler}>
          <label className={styles.label} htmlFor="schema">
            Name:
          </label>
          <br />
          <input
            className={styles.inputBox}
            type="text"
            id="schema"
            name="schema"
          />
          <br />
          <label className={styles.label} htmlFor="mandatoryExpiration">
            Mandatory Expiry:
          </label>
          <br />
          <input
            className={styles.inputBox}
            type="text"
            id="mandatoryExpiration"
            name="mandatoryExpiration"
          />
          <br />
          <label className={styles.label} htmlFor="attributes">
            Attributes:
          </label>
          <br />
          <textarea
            className={styles.inputBox}
            id="attributes"
            name="attributes"
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
