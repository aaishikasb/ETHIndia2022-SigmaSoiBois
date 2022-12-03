import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SigmaZK</title>
        <meta name="description" content="Polygon ID integration with Collab.Land" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className={styles.polyGrad}>SigmaZK</span>
        </h1>

        <h1 className={styles.subtitle}>Create Schema</h1>

        <form className={styles.form} action="/send-data-here" method="post">
            <label className={styles.label} for="name">Name:</label><br/>
            <input className={styles.inputBox} type="text" id="name" name="name" /><br/>
            <label className={styles.label} for="expiry">Mandatory Expiry:</label><br/>
            <input className={styles.inputBox} type="text" id="expiry" name="expiry" /><br/>
            <label className={styles.label} for="atribs">Attributes:</label><br/>
            <input className={styles.inputBox} type="text" id="atribs" name="atribs" /><br/>
            <button className={styles.submit} type="submit">Create Schema 📜</button>
        </form>
        <label>View <a className={styles.link} href="/list">Past Schemas</a>.</label>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://collab.land"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}