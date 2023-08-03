import { Content } from "../Content";
import { HeaderTag } from "../HeaderTag";
import { IconServes } from "../IconServes";
import styles from "./HelpSection.module.scss";

interface HelpSectionProps {}

export const HelpSection = ({}: HelpSectionProps) => (
  <section className={styles.helpSection}>
    <Content>
      <div className={styles.wrapper}>
        <span className={styles.headerContainer}>
          <HeaderTag
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
