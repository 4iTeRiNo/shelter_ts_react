import { Link } from "react-router-dom";
import { Htag } from "../Htag";
import styles from "./LocalInfo.module.scss";
import { localInfo } from "../../types";

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
        <Link to={`mailto:${email}`} className={styles.link} children={email} />
        <Link
          to={`tel:+${telephone}`}
          className={styles.link}
          children={telephone}
        />
      </div>
      <div className={styles.localInfo}>
        <Htag tag="h2" children="We are waiting for your visit" />
        <Link
          to='#'
          target="_blank"
          className={styles.link}
          children={addressOne}
        />
        <Link
          to='#'
          target="_blank"
          className={styles.link}
          children={addressTwo}
        />
      </div>
    </>
  );
};
