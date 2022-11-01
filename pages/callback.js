import dynamic from 'next/dynamic';

// client-side rendering only
const MyNotSsrComponent = dynamic(
  () => import('../components/CallbackClient'),
  { ssr: false, loading: () => <p>Loading...</p> }
);

export default function Callback() {
  return <MyNotSsrComponent />;
}
