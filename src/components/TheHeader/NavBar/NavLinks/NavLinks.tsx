import styles from "./NavLinks.module.scss";
import { NavLink } from "react-router-dom";
interface NavLinksProps {
  to: string;
  children: React.ReactNode;
  onClick: () => void;
}

export const NavLinks = ({ children, to }: NavLinksProps) => {
  return (
    <li className={styles.item}>
      <NavLink to={to}
        onClick={() => Boolean}
        className={(isActive) => styles.link + (isActive ? "" : 'active')}>
        {children}
      </NavLink>
    </li>
  );
};
