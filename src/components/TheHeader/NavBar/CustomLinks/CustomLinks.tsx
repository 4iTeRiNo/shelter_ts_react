import {useEffect} from 'react';
import styles from './CustomLinks.module.scss';

import {NavLink, NavLinkProps} from 'react-router-dom';

interface CustomLinksProps extends NavLinkProps {}

export const CustomLink = (props: CustomLinksProps) => {
  return (
    <li className={styles.item}>
      <NavLink
        to={props.to}
        className={({isActive}) => styles.link + (!isActive ? '' : ` ${styles.active}`)}
      >
        {props.children}
      </NavLink>
    </li>
  );
};
