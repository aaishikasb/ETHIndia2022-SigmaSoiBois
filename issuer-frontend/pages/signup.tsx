import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { signUpUser } from "../services/api";

import styles from "../styles/Home.module.css";

export default function Home() {
  const router = useRouter();
  const submitHandler = async (event: Event) => {
    event.preventDefault();
    const email = event.target?.email?.value;
    const password = event.target?.password?.value;
    const result = await signUpUser(email, password);
    if (result) {
      router.push("/signin");
    } else {
      router.push("/signup");
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

        <h1 className={styles.subtitle}>Sign Up</h1>

        <form className={styles.form} onSubmit={submitHandler}>
          <label className={styles.label} htmlFor="email">
            Email Address:
          </label>
          <br />
          <input
            className={styles.inputBox}
            type="text"
            id="email"
            name="email"
          />
          <br />
          <label className={styles.label} htmlFor="password">
            Password:
          </label>
          <br />
          <input
            className={styles.inputBox}
            type="password"
            id="password"
            name="password"
          />
          <br />
          <button className={styles.submit} type="submit">
            Let's register! 🚀
          </button>
        </form>

        <label>
          Have an account already?{" "}
          <a className={styles.link} href="/signin">
            Sign in
          </a>
          !
        </label>
      </main>
    </div>
  );
}
