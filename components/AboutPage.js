export const AboutPage = () => {
  return (
    <>
      <div className='p-3 font-mono'>
        <h2 className=' text-2xl'>React hooks</h2>
        <div className='mb-3'>
          <p className='mb-3'>
            This website shows interactive examples of popular React hooks and
            some information about them - useState, useEffect, useContext,
            useRef, useMemo, useCallback.
          </p>
          <a
            href='https://github.com/bekzodnj/reacthooks'
            rel='noreferrer noopener'
            className='underline text-lg'
          >
            GitHub repo
          </a>
        </div>
        <h3 className='text-xl'>Resources: </h3>
        <a
          href='https://reactjs.org/docs/hooks-reference.html'
          target='_blank'
          rel='noreferrer noopener'
          className='underline inline-block'
        >
          Hooks API Reference - React Docs
        </a>
        <br />
        <a
          href='https://beta.reactjs.org/apis/react'
          target='_blank'
          rel='noreferrer noopener'
          className='underline inline-block'
        >
          React APIs - React Beta Docs
        </a>
        <p className='mt-7'>
          Developed by{' '}
          <a
            href='https://github.com/bekzodnj'
            rel='noreferrer noopener'
            className='underline'
          >
            bekzodnj (github)
          </a>{' '}
          /{' '}
          <a
            href='https://twitter.com/bekzodnj'
            rel='noreferrer noopener'
            className='underline'
          >
            twitter
          </a>
        </p>
      </div>
    </>
  );
};
