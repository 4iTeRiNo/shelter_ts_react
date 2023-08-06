import styles from "./NavLinks.module.scss";
import { NavLink } from "react-router-dom";
interface NavLinksProps {
  to: string;
  children: string;
}

export const NavLinks = ({ children, to }: NavLinksProps) => {
  return (
    <li className={styles.item}>
      <NavLink  to={to} className={(isActive) => styles.link + (isActive ? "" : 'active')}>
        {children}
      </NavLink>
    </li>
  );
};
