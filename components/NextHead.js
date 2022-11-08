import Head from 'next/head';

export default function NextHead({ hookName = '' }) {
  const description = `Learn how to use ${hookName} hook in React`;
  return (
    <Head>
      <title>{hookName} - React Hook</title>
      <meta name='description' content={description} />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
}
