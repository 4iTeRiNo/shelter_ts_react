import { Content } from "../Content";
import { HeaderTag } from "../HeaderTag";
import { IconServes } from "./IconServes/IconServes";
import styles from "./HelpSection.module.scss";


export const HelpSection = () => (
  <section id="help" className={styles.helpSection}>
    <Content>
      <div className={styles.wrapper}>
        <span className={styles.headerContainer}>
          <HeaderTag color="dark" size="small"
            tagName="h3"
            children="How you can help
        our shelter"
          />
        </span>
        <IconServes />
      </div>
    </Content>
  </section>
);
