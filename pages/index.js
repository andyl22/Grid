import Head from 'next/head';
import Grid from '../components/Grid';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Grid</title>
        <meta name="description" content="Grid App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Grid />
      </main>
      <footer>
        <p>footer</p>
      </footer>
    </div>
  );
}
