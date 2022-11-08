/* eslint-disable react/jsx-no-comment-textnodes */
import { useReducer } from 'react';
import { CodeEditor, CodeComment } from '../components/common/CodeEditor';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Head from 'next/head';

const codeString = `const initialState = { count: 50 };

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT_COIN':
      return { count: state.count + 10 };
    case 'DECREMENT_COIN':
      return { count: state.count - 10 };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <p> {state.count} / 100 🪙</p>
      <button onClick={() => dispatch({ type: 'DECREMENT_COIN' })}>-</button>
      <button onClick={() => dispatch({ type: 'INCREMENT_COIN' })}>+</button>
    </>
  );
}
`;

const AWARD_EMOJIS = ['🚀', '🎉', '✨', '✨', '💎', '💯', '🪐'];

const initialState = {
  gemCount: 80,
  coinCount: 70,
  starCount: 60,
};

// enum ActionKind
const ActionKind = {
  INCREASE_GEM: 'INCREASE_GEM',
  DECREASE_GEM: 'DECREASE_GEM',
  INCREASE_COIN: 'INCREASE_COIN',
  DECREASE_COIN: 'DECREASE_COIN',
  INCREASE_STAR: 'INCREASE_STAR',
  DECREASE_STAR: 'DECREASE_STAR',
};

const limitTheNum = (num) => (num < 0 ? 0 : num > 100 ? 100 : num);

const STEP = 10;
const reducer = (state, action) => {
  switch (action.type) {
    case ActionKind.INCREASE_GEM:
      return {
        ...state,
        gemCount: limitTheNum(state.gemCount + STEP),
      };

    case ActionKind.DECREASE_GEM:
      return {
        ...state,
        gemCount: limitTheNum(state.gemCount - STEP),
      };

    case ActionKind.INCREASE_COIN:
      return {
        ...state,
        coinCount: limitTheNum(state.coinCount + STEP),
      };

    case ActionKind.DECREASE_COIN:
      return {
        ...state,
        coinCount: limitTheNum(state.coinCount - STEP),
      };

    case ActionKind.INCREASE_STAR:
      return {
        ...state,
        starCount: limitTheNum(state.starCount + STEP),
      };

    case ActionKind.DECREASE_STAR:
      return {
        ...state,
        starCount: limitTheNum(state.starCount - STEP),
      };
  }
};

const Reducer = () => {
  const [{ gemCount, coinCount, starCount }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const isEachItemEqualHundred = [gemCount, coinCount, starCount].every(
    (item) => item === 100
  );

  let emojis = AWARD_EMOJIS.sort(() => 0.5 - Math.random()).slice(0, 3);

  const reducerObjCodeString = `{
 gemCount: ${gemCount},
 coinCount: ${coinCount},
 starCount: ${starCount},
}`;

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2'>
      <Head>
        <title>useReducer - React Hook</title>
        <meta name='description' content='useReducer example' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section className='border border-sky-900 p-2'>
        <h2 className='font-mono text-xl'>useReducer</h2>

        <div
          className={
            'mb-1 border-2 flex items-center ' +
            (isEachItemEqualHundred && 'border-2 border-sky-400')
          }
        >
          {/* COIN INDICATORS */}
          <div className={'p-2 basis-1/2'}>
            <p
              className={
                'text-xl ' + (gemCount === 100 && 'text-sky-400 font-semibold')
              }
            >
              <span className='inline-block'>{gemCount} / 100</span>
              <span
                className='text-3xl inline-block p-2'
                role='img'
                aria-label='gem'
              >
                💎
              </span>
            </p>
            <p
              className={
                'text-xl ' +
                (coinCount === 100 && 'text-orange-400 font-semibold')
              }
            >
              <span className='inline-block'>{coinCount} / 100</span>
              <span
                className='text-3xl inline-block p-2'
                role='img'
                aria-label='coin'
              >
                🪙
              </span>
            </p>

            <p
              className={
                'text-xl ' +
                (starCount === 100 && 'text-yellow-400 font-semibold')
              }
            >
              <span className='inline-block'>{starCount} / 100</span>
              <span
                className='text-3xl inline-block p-2'
                role='img'
                aria-label='watermelon'
              >
                ⭐
              </span>
            </p>
          </div>
          <div className='self-stretch bg-stone-900 grow'>
            <CodeEditor className='self-stretch ml-2'>
              <CodeComment>// state:</CodeComment>
              <p className='whitespace-pre'>{reducerObjCodeString}</p>
              {isEachItemEqualHundred && (
                <CodeComment>// {emojis.join(' ')}</CodeComment>
              )}
            </CodeEditor>
          </div>
        </div>

        {/* BUTTONS GROUP */}
        <div>
          <div className='flex space-x-1 mb-1'>
            <button
              type='button'
              className='p-2 bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex justify-center items-center'
              onClick={() => dispatch({ type: ActionKind.INCREASE_GEM })}
            >
              Increase +
              <span
                className='text-2xl inline-block p-2'
                role='img'
                aria-label='gem'
              >
                💎
              </span>
            </button>
            <button
              type='button'
              className='p-2 bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium  dark:bg-blue-800 dark:hover:bg-blue-900 focus:outline-none dark:focus:ring-blue-800 flex justify-center items-center'
              onClick={() => dispatch({ type: ActionKind.DECREASE_GEM })}
            >
              Decrease -
              <span
                className='text-2xl inline-block p-2'
                role='img'
                aria-label='gem'
              >
                💎
              </span>
            </button>
          </div>

          <div className='flex space-x-1 mb-1'>
            <button
              type='button'
              className='p-2 bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex justify-center items-center'
              onClick={() => dispatch({ type: ActionKind.INCREASE_COIN })}
            >
              Increase +
              <span
                className='text-2xl inline-block p-2'
                role='img'
                aria-label='gem'
              >
                🪙
              </span>
            </button>
            <button
              type='button'
              className='p-2 bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium  dark:bg-blue-800 dark:hover:bg-blue-900 focus:outline-none dark:focus:ring-blue-800 flex justify-center items-center'
              onClick={() => dispatch({ type: ActionKind.DECREASE_COIN })}
            >
              Decrease -
              <span
                className='text-2xl inline-block p-2'
                role='img'
                aria-label='gem'
              >
                🪙
              </span>
            </button>
          </div>

          <div className='flex space-x-1 mb-1'>
            <button
              type='button'
              className='p-2 bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex justify-center items-center'
              onClick={() => dispatch({ type: ActionKind.INCREASE_STAR })}
            >
              Increase +
              <span
                className='text-2xl inline-block p-2'
                role='img'
                aria-label='gem'
              >
                ⭐
              </span>
            </button>
            <button
              type='button'
              className='p-2 bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium  dark:bg-blue-800 dark:hover:bg-blue-900 focus:outline-none dark:focus:ring-blue-800 flex justify-center items-center'
              onClick={() => dispatch({ type: ActionKind.DECREASE_STAR })}
            >
              Decrease -
              <span
                className='text-2xl inline-block p-2'
                role='img'
                aria-label='gem'
              >
                ⭐
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Tutorial */}
      <section className='p-2'>
        {/* header-intro */}
        <h2 className='font-mono text-xl'>useReducer</h2>
        <div className='mb-4'>
          <p>
            An alternative to useState hook provides a way to separate complex
            state management from the component.
          </p>
        </div>
        <SyntaxHighlighter language='jsx' style={oneDark}>
          {codeString}
        </SyntaxHighlighter>
      </section>
    </div>
  );
};

export default Reducer;
