import { useRef, useEffect } from 'react';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const EFFECT_HOOK_EXAMPLE_STRING = `export default function Box() {
  const ref = useRef(null);

  useEffect(() => {
    const div = ref.current;

    // when component mounts, create an observer
    // the browser API notifies us when the element is visible
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        document.body.style.backgroundColor = 'orange';
      } else {
        document.body.style.backgroundColor = 'darkblue';
      }
    });

    observer.observe(div, {
      threshold: 1.0,
    });
    return () => {
      // when component unmounts, disconnect the observer
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        height: 100,
        width: 100,
        // ...
      }}
    />
  );`;

// https://codesandbox.io/s/react-hooks-example-75s41y
const EFFECT_HOOK_NOTES_STRING = `useEffect(() => {
// do something after mounting the component (e.g. connect to server, interact with browser API etc.)
}, [])


useEffect(() => {
  // run when state variable (e.g. counter) changes
}, [counter])
`;

const Effect = ({}) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2'>
      {/* INTERACTIVE */}
      <section className='border border-sky-900 p-2'>
        <h2 className='font-mono text-xl'>useEffect example</h2>
        <div className='h-64  overflow-y-scroll'>
          <EffectExample />
        </div>
      </section>

      {/* TUTORIAL */}
      <section className='overflow-x-scroll p-2'>
        <h2 className='font-mono text-xl'>useEffect</h2>
        <div className='mb-4'>
          <p className='mb-2'>
            useEffect lets you synchronize a component with an external system.{' '}
            <a
              href='https://beta.reactjs.org/apis/react/useEffect'
              target='_blank'
              rel='noreferrer noopener'
              className='underline'
            >
              (useEffect - React Docs).
            </a>
          </p>
          <ul>
            <li>- fetching data, connecting to server</li>
            <li>- listening to global window event</li>
            <li>- triggering animations (e.g. 3rd party libraries)</li>
            <li>
              - tracking the visibility of an element (e.g. Intersection
              Observer API)
            </li>
          </ul>
          <SyntaxHighlighter language='javascript' style={oneDark}>
            {EFFECT_HOOK_EXAMPLE_STRING}
          </SyntaxHighlighter>
        </div>

        <div className='mb-4'>
          <p>
            <span
              className='bg-sky-600 inline-block rounded px-1'
              role='img'
              aria-label='rocket'
            >
              🚀
            </span>{' '}
            Note
          </p>
          <SyntaxHighlighter
            language='jsx'
            style={oneDark}
            wrapLines={true}
            wrapLongLines={true}
          >
            {EFFECT_HOOK_NOTES_STRING}
          </SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
};

const EffectExample = () => {
  return (
    <div id='boxWrap' className='transition-colors p-3'>
      <p className='font-mono'>(Example shows browser API + useEffect hook)</p>
      <LongList />
      <Box />
      <LongList />
      <Box />
      <LongList />
    </div>
  );
};

const LongList = () => {
  const items = [];

  for (let i = 0; i < 35; i++) {
    items.push(<li key={i}>Item #{i} (keep scrolling)</li>);
  }

  return <ul>{items}</ul>;
};

const Box = () => {
  const divRef = useRef(null);

  useEffect(() => {
    const div = divRef.current;

    const observe = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (document.getElementById('boxWrap')) {
        if (entry.isIntersecting) {
          //console.log('Box is visible');
          document.getElementById('boxWrap').style.backgroundColor = '#d6593a';
        } else {
          //console.log('Box is not visible');
          document.getElementById('boxWrap').style.backgroundColor = '#072448';
        }
      }
    });

    observe.observe(div, { threshold: 1 });

    return () => {
      observe.disconnect(div);
    };
  }, []);

  return (
    <div
      ref={divRef}
      className='inline-block p-3 bg-gray-100 m-1 shadow-md rounded select-none active:bg-orange-200'
    >
      <span role='img' aria-label='pineapple' className='text-5xl'>
        🍍
      </span>
    </div>
  );
};

export default Effect;
