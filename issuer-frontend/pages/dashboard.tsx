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
            </h1><br/><br/>
            <button className={styles.submit} type="submit">Create Schema 📜</button><br/><br/>
            <button className={styles.submit} type="submit">Offer Claim 🏆</button>
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