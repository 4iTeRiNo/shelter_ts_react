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
        <NavLinks to='/' children="About the shelter"/>
        <NavLinks to='/about' children="Our pets"/>
        <NavLinks to='/' children="Help the shelter"/>
        <NavLinks to='/footer' children="Contact"/>
      </ul>
    </nav>
  );
};