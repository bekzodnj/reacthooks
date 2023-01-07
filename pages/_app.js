import Image from 'next/image';
import styles from '../styles/Home.module.css';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name='google-site-verification'
          content='CuB3GSVj1YcjFw3B750j7wfKdPMMGR6YE08lLBywqZw'
        />
      </Head>
      <main className='min-h-screen bg-darknightblue text-white pb-12'>
        <Navbar />
        <Component {...pageProps} />
      </main>
      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  );
}

export default MyApp;
