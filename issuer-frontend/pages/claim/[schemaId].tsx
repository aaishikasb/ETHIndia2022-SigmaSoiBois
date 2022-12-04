import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import React from "react";
import { createOffer } from "../../services/api";

export default function Home() {
  const router = useRouter();

  const { schemaId } = router.query;
  const submitHandler = async (event: Event) => {
    event.preventDefault();
    const discordId = event.target?.discordId?.value;
    const Role = event.target?.Role?.value;
    const ContributionNumber = event.target?.ContributionNumber?.value;
    const attributes = JSON.stringify([
      {
        attributeKey: "Role",
        attributeValue: Role,
      },
      {
        attributeKey: "ContributionNumber",
        attributeValue: parseInt(ContributionNumber),
      },
    ]);
    const result = await createOffer(schemaId as string, discordId, attributes);
    if (result) {
      router.push("/success");
    } else {
      router.push("/fail");
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

        <h1 className={styles.subtitle}>Offer Claim</h1>

        <form className={styles.form} onSubmit={submitHandler}>
          <label className={styles.label} htmlFor="discordId">
            Discord ID:
          </label>
          <br />
          <input
            className={styles.inputBox}
            type="text"
            id="discordId"
            name="discordId"
          />
          <br />
          <label className={styles.label} htmlFor="Role">
            Contributor Role:
          </label>
          <br />
          <input
            className={styles.inputBox}
            type="text"
            id="Role"
            name="Role"
          />
          <br />
          <label className={styles.label} htmlFor="ContributionNumber">
            Number of Contributions:
          </label>
          <br />
          <input
            className={styles.inputBox}
            type="text"
            id="ContributionNumber"
            name="ContributionNumber"
          />
          <br />
          <button className={styles.submit} type="submit">
            Offer Claim 🏆
          </button>
        </form>
      </main>
    </div>
  );
}
