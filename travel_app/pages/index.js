import Head from 'next/head';
import styles from '../assets/styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <span className='material-icons' >pie_chart</span>
    </div>
  )
}