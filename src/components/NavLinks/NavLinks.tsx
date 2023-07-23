import styles from "./NavLinks.module.scss";
import { NavLink } from "react-router-dom";

// export const NavLinks = () => {
//   return (
//     <nav className={styles.navLink}>
//       <ul className={styles.container}>
//         <li className={styles.item}>
//           <NavLink to="/About" aria-current="page" className={styles.link}>
//             About the shelter
//           </NavLink>
//         </li>
//         <li className={styles.item}>
//           <NavLink to="/Our" className={styles.link}>
//             Our pets
//           </NavLink>
//         </li>
//         <li className={styles.item}>
//           <NavLink to="/Help" className={styles.link}>
//             Help the shelter
//           </NavLink>
//         </li>
//         <li className={styles.item}>
//           <NavLink to="/Contact" className={styles.link}>
//             Contacts
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// };

interface NavLinksProps {
  children: string;
}

export const NavLinks = ({ children }: NavLinksProps) => {
  return (
    <li className={styles.item}>
      <NavLink to="/About" className={styles.link}>
        {children}
      </NavLink>
    </li>
  );
};
