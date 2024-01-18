import {useEffect, useRef, useState} from 'react';
import styles from './NavBar.module.scss';
import {CustomLink} from './CustomLinks';
import {FiMenu} from 'react-icons/fi';
import cn from 'classnames';
import {Outlet, Router, Routes} from 'react-router-dom';

export const NavBar = () => {
  const [navbarOpen, setNavBarOpen] = useState(false);
  const btnClass = cn({
    [styles.container]: true,
    [styles.showMenu]: navbarOpen,
  });

  return (
    <nav className={styles.navBar}>
      <button
        className={styles.toggle}
        onClick={() => setNavBarOpen((prev) => !prev)}
      >
        {navbarOpen ? (
          <FiMenu
            style={{
              width: '40px',
              height: '35px',
              color: ' #f1cdb3',
              strokeWidth: '1.5',
              transform: `rotate(${90}deg)`,
            }}
          />
        ) : (
          <FiMenu style={{width: '40px', height: '35px', color: ' #f1cdb3', strokeWidth: '1.5'}} />
        )}
      </button>
      <ul className={btnClass}>
        <CustomLink
          to='/about#about'
          children='About the shelter'
        />
        <CustomLink
          to='/ourPets'
          children='Our pets'
        />
        <CustomLink
          to='/help#help'
          children='Help the shelter'
        />
        <CustomLink
          to='/contact#contact'
          children='Contact'
        />
      </ul>
    </nav>
  );
};
