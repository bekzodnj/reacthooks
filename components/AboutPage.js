export const AboutPage = () => {
  return (
    <>
      <div className='p-3 font-mono'>
        <h2 className=' text-2xl'>React hooks</h2>
        <p className='mb-3'>
          This website shows interactive examples of popular React hooks and
          some information about them - useState, useEffect, useContext, useRef,
          useMemo, useCallback.
        </p>

        <h3 className='text-xl'>Resources: </h3>
        <a
          href='https://reactjs.org/docs/hooks-reference.html'
          target='_blank'
          rel='noreferrer noopener'
          className='underline block'
        >
          Hooks API Reference - React Docs
        </a>
        <a
          href='https://beta.reactjs.org/apis/react'
          target='_blank'
          rel='noreferrer noopener'
          className='underline block'
        >
          React APIs - React Beta Docs
        </a>
      </div>
    </>
  );
};
