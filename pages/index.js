import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import { AboutPage } from '../components/AboutPage';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>React Hooks Examples</title>
        <meta
          name='description'
          content='React hooks interactive examples - useEffect, useContext, useMemo, useCallback'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='min-h-screen bg-darknightblue text-white'>
        <AboutPage />
      </main>
    </div>
  );
}
