import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Polygon ID - Collab.Land</title>
        <meta name="description" content="Polygon ID integration with Collab.Land" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className={styles.polyGrad}>SigmaZK</span>
        </h1>

        <h1 className={styles.subtitle}>Sign In</h1>

        <form className={styles.form} action="/send-data-here" method="post">
            <label className={styles.label} for="email">Email Address:</label><br/>
            <input className={styles.inputBox} type="text" id="email" name="email" /><br/>
            <label className={styles.label} for="pass">Password:</label><br/>
            <input className={styles.inputBox} type="pass" id="last" name="past" /><br/>
            <button className={styles.submit} type="submit">Let's go! 🚀</button>
        </form>
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