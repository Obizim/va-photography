import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.main}>
        <div className={styles.contents}>
          <h1 className={styles.title}>
            Victor <br /> Abiola <br /> Photographer
          </h1>
          <p className={styles.desc}>
            Event/Portrait photographer & film maker
          </p>
        </div>

        <div className={styles.works}>
          <div className={styles.work}>
          <div className={styles.work_container}>
            <img src="/images/img1.png" alt="Work 1" />
            <div className={styles.work_name}>
              <p>Weddings</p>
              <p>2021</p>
            </div>
          </div>
          <div className={styles.work_container}>
            <img src="/images/img1.png" alt="Work 1" />
            <div className={styles.work_name}>
              <p>Weddings</p>
              <p>2021</p>
            </div>
          </div>
          <div className={styles.work_container}>
            <img src="/images/img1.png" alt="Work 1" />
            <div className={styles.work_name}>
              <p>Weddings</p>
              <p>2021</p>
            </div>
          </div>
          <div className={styles.work_container}>
            <img src="/images/img1.png" alt="Work 1" />
            <h2>jfsfisjf</h2>
          </div>
        </div>
          </div>
      </section>
    </div>
  );
};

export default Home;
