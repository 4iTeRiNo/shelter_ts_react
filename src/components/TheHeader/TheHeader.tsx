import { ReactNode } from "react";
import styles from "./TheHeader.module.scss";
import { TheLogo } from "../TheLogo";
import { NavBar } from "../NavBar";
import { TheStartScreen } from "../TheStartScreen";

export const TheHeader = () => {
  return <>
  <div className={styles.header}>
      <TheLogo logo="Cozy  House" someTextBelow="Shelter for pets in Boston" />
      <NavBar />
      <TheStartScreen />
    </div>
  </>
  
};
