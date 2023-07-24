import { Link } from "react-router-dom";
import { Htag } from "../Htag";
import styles from "./LocalInfo.module.scss";
import { localInfo } from "../types";

interface LocalInfoProps extends localInfo {}

export const LocalInfo = ({
  addressOne,
  addressTwo,
  email,
  telephone,
}: LocalInfoProps) => {
  return (
    <>
      <div className={styles.localInfo}>
        <Htag tag="h2" children="For questions and suggestions" />
        <Link to={email} />
        <Link to={`${telephone}`} />
      </div>
      <div className={styles.localInfo}>
        <Htag tag="h2" children="We are waiting for your visit" />
        <Link to={addressOne} />
        <Link to={addressTwo} />
      </div>
    </>
  );
};
