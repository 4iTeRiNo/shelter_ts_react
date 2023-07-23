import styles from "./NavBar.module.scss";
import { NavLinks } from "../NavLinks";

// export const NavBar = () => {
//   return (
//     <>
//       <NavLinks />
//     </>
//   );
// };


export const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.container}>
        <NavLinks children="About the shelter"/>
        <NavLinks children="Our pets"/>
        <NavLinks children="Help the shelter"/>
        <NavLinks children="Contact"/>
      </ul>
    </nav>
  );
};