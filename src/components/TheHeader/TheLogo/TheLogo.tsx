import {NavLink} from 'react-router-dom';
import styles from './TheLogo.module.scss';

interface TheLogoProps {
  logo: string;
  someTextBelow: string;
}

export const TheLogo = ({logo, someTextBelow}: TheLogoProps) => {
  return (
    <div className={styles.container}>
      <NavLink
        to='/about'
        className={styles.logo}
      >
        {logo}
      </NavLink>
      <span className={styles.span}>{someTextBelow}</span>
    </div>
  );
};
