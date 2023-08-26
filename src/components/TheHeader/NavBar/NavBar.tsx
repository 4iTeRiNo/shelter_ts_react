import { useEffect, useRef, useState } from "react";
import styles from "./NavBar.module.scss";
import { NavLinks } from "./NavLinks";
import { FiMenu } from 'react-icons/fi';
import cn from "classnames";
import { link } from "fs";


export const NavBar = () => {

  const [navbarOpen, setNavBarOpen] = useState(false)
  const btnClass = cn({
    [styles.container]: true,
    [styles.showMenu]: navbarOpen,
  })

  // const ref = useRef()
  // useEffect(() => {
  //   const handler = (event) => {
  //     if (navbarOpen &&
  //       ref.current &&
  //       !ref.current.contains(event.target)
  //     ) {
  //       setNavBarOpen(false)
  //     }
  //   };
  //   document.addEventListener('mousedown', handler)
  //   return () => {
  //     document.removeEventListener('mousedown', handler)
  //   }
  // }, [navbarOpen])

  return (
    <nav className={styles.navBar} >
      <button
        className={styles.toggle}
        onClick={() => setNavBarOpen((prev) => !prev)}>
        {navbarOpen ? (<FiMenu style={{
          width: '40px', height: '35px', color: ' #f1cdb3',
          strokeWidth: '1.5',
          transform: `rotate(${90}deg)`
        }} />
        ) :
          (<FiMenu style={{ width: '40px', height: '35px', color: ' #f1cdb3', strokeWidth: '1.5', }} />
          )
        }
      </button>
      <ul className={btnClass}>
        <NavLinks to="./" onClick={() => setNavBarOpen(false)} children="About the shelter" />
        <NavLinks to='/#about' onClick={() => setNavBarOpen(false)} children="Our pets" />
        <NavLinks to='/#link' onClick={() => setNavBarOpen(false)} children="Help the shelter" />
        <NavLinks to='/hai' onClick={() => setNavBarOpen(false)} children="Contact" />
      </ul>
    </nav>
  );
};