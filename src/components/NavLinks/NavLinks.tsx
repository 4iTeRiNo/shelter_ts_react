import styles from "./NavLinks.module.scss";
import { NavLink } from "react-router-dom";
interface NavLinksProps {
  children: string;
}

export const NavLinks = ({ children }: NavLinksProps) => {
  return (
    <li className={styles.item}>
      <NavLink  to='about' className={(isActive) => styles.link + (isActive ? "" : styles.active)}>
        {children}
      </NavLink>
    </li>
  );
};
