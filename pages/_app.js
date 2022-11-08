import Image from 'next/image';
import styles from '../styles/Home.module.css';
import '../styles/globals.css';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <main className='min-h-screen bg-darknightblue text-white pb-12'>
        <Navbar />
        <Component {...pageProps} />
      </main>
      <footer className={styles.footer}>
        <p className='flex space-x-1'>
          <span>Powered by:</span>
          <a
            href='https://vercel.com'
            target='_blank'
            rel='noopener noreferrer'
            className='underline'
          >
            Next.js
          </a>
        </p>
        <a
          href='https://github.com/bekzodnj/reacthooks'
          rel='noreferrer noopener'
          className='underline'
        >
          github
        </a>{' '}
      </footer>
    </>
  );
}

export default MyApp;
