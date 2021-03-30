import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>HomePage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti at
          cumque nulla quis blanditiis est explicabo quae quas eius minus.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti at
          cumque nulla quis blanditiis est explicabo quae quas eius minus.
        </p>
        <Link href="Deep">
          <a className={styles.btn}>Ninja</a>
        </Link>
      </div>
    </>
  );
}
