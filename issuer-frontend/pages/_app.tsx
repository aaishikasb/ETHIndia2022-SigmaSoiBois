import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer
        position={"top-right"}
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
      />
      <Component {...pageProps} />
      <footer className={styles.footer}>
        <a href="https://collab.land" target="_blank" rel="noopener noreferrer">
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  );

}
