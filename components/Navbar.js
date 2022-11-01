import Link from 'next/link';
let activeClassName = 'border-b-yellow-600 border-b-4 py-3 list-none';

import { useRouter } from 'next/router';

//   <li className={router.pathname == "/" ? "active" : ""}>
function Navbar() {
  const router = useRouter();
  return (
    <nav className='px-4 bg-bluerose text-white bold flex overflow-x-scroll space-x-5 text-xl '>
      <li
        className={
          router.pathname == '/state' ? activeClassName : 'py-3 list-none'
        }
      >
        <Link href='/state'>useState</Link>
      </li>

      <li
        className={
          router.pathname == '/effect' ? activeClassName : 'py-3 list-none'
        }
      >
        <Link href='/effect'>useEffect</Link>
      </li>

      <li
        className={
          router.pathname == '/context' ? activeClassName : 'py-3 list-none'
        }
      >
        <Link href='/context'>useContext</Link>
      </li>

      <li
        className={
          router.pathname == '/ref' ? activeClassName : 'py-3 list-none'
        }
      >
        <Link href='/ref'>useRef</Link>
      </li>

      <li
        className={
          router.pathname == '/reducer' ? activeClassName : 'py-3 list-none'
        }
      >
        <Link href='/reducer'>useReducer</Link>
      </li>

      <li
        className={
          router.pathname == '/memo' ? activeClassName : 'py-3 list-none'
        }
      >
        <Link href='/memo'>useMemo</Link>
      </li>

      <li
        className={
          router.pathname == '/callback' ? activeClassName : 'py-3 list-none'
        }
      >
        <Link href='/callback'>useCallback</Link>
      </li>

      <li
        className={
          router.pathname == '/layout' ? activeClassName : 'py-3 list-none'
        }
      >
        <Link href='/layout'>useLayoutEffect</Link>
      </li>
    </nav>
  );
}

export default Navbar;
