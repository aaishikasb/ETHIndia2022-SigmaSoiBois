import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";
import { listAllSchema } from "../services/api";
import ListObject from "../components/list-object";

export default function Home() {
  const [schemas, setSchemas] = useState([]);
  const fetchSchemas = async () => {
    const schemasFromAPI = await listAllSchema();
    setSchemas(schemasFromAPI);
  };
  useEffect(() => {
    fetchSchemas();
  }, []);
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

        <h1 className={styles.subtitle}>List of Schemas</h1>
        {schemas.map((val: any, index) => {
          console.log("val:", val);
          return (
            <ListObject schema={val?.schema} schemaId={val?.id} key={index} />
          );
        })}
      </main>
    </div>
  );
}
