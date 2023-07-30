import styles from "./TheHeader.module.scss";
import { TheLogo } from "../TheLogo";
import { NavBar } from "../NavBar";

export const TheHeader = () => {
  return <>
  <header className={styles.header}>
      <TheLogo logo="Cozy  House" someTextBelow="Shelter for pets in Boston" />
      <NavBar />
    </header>
  </>
  
};
