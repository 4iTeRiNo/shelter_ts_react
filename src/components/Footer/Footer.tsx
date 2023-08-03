import { Content } from "../Content";
import styles from "./Footer.module.scss";
import { localInfo } from "../../types";
import { LocalInfo } from "../LocalInfo";
import LogoFooter from "../../assets/footer/footer-puppy.png";

interface FooterProps extends localInfo {}

export const Footer = (props: FooterProps) => {
  return (
    <footer>
      <Content>
        <div className={styles.footer}>
          <div className={styles.wrapperLink}>
            <LocalInfo
              addressOne={props.addressOne}
              addressTwo={props.addressTwo}
              email={props.email}
              telephone={props.telephone}
            />
          </div>
          <div className={styles.wrapperLogo}>
            <img src={LogoFooter} alt={LogoFooter} className={styles.logo} />
          </div>
        </div>
      </Content>
    </footer>
  );
};
