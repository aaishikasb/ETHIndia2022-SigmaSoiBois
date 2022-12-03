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
          Welcome to <span className={styles.polyGrad}>Polygon ID</span> integration with <span className={styles.collabYellow}>Collab.</span><span className={styles.collabGrey}>Land</span> Demo!
        </h1>

        <p className={styles.description}>
          1. Get started by creating an organiztion.<br />
          2. Defining a Schema for your Verifiable Credential.<br />
          3. Issuing a Claim for a Verifiable Credential to a user.<br />
          4. User Claims the verifiable credential!<br />
        </p>
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
