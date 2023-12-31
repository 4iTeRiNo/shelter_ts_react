import { Link } from "react-router-dom";
import { HeaderTag } from "../../HeaderTag";
import styles from "./LocalInfo.module.scss";
import { ReactComponent as IconEmail } from "../../../assets/svg/icon-email.svg";
import { ReactComponent as IconPhone } from "../../../assets/svg/phone.svg";
import { ReactComponent as IconPoint } from "../../../assets/svg/icon-marker.svg";
import { localInfo } from "../../../types";

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
        <HeaderTag
          color="white"
          size="small"
          tagName="h3"
          children="For questions and suggestions"
        />
        <div className={styles.containerLink}>
          <IconEmail className={styles.icon} />
          <Link
            to={`mailto: ${email}`}
            className={styles.link}
            children={email}
          />
        </div>
        <div className={styles.containerLink}>
          <IconPhone className={styles.icon} />
          <Link
            to={`tel: ${telephone}`}
            className={styles.link}
            children={telephone}
          />
        </div>
      </div>
      <div className={styles.localInfo}>
        <HeaderTag
          color="white"
          size="small"
          tagName="h3"
          children="We are waiting for your visit"
        />
        <div className={styles.containerLink}>
          <IconPoint className={styles.icon} />
          <Link
            to="#"
            target="_blank"
            className={styles.link}
            children={addressOne}
          />
        </div>
        <div className={styles.containerLink}>
          <IconPoint className={styles.icon} />
          <Link
            to="#"
            target="_blank"
            className={styles.link}
            children={addressTwo}
          />
        </div>
      </div>
    </>
  );
};
