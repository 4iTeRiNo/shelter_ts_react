import styles from "./TheStartScreen.module.scss";
import welcomeLogo from "../../assets/welcome/welcome__puppy.png";
import { Paragraph } from "../Paragraph";
import { HeaderTag } from "../HeaderTag";
import { Button } from "../Button";
import { Content } from "../Content";

export const TheStartScreen = () => {
  return (
    <Content>
      <div className={styles.welcome}>
        <div className={styles.wrapper}>
          <HeaderTag tagName="h1" children="Not only people need a house" />
          <Paragraph
            text={
              "We offer to give a chance to a little and nice puppy with an extremely wide and open heart. He or she will love you more than anybody else in the world, you will see!"
            }
          />
          <Button children="Make a friend" />
        </div>
        <div className={styles.svgContainer}>
          <img src={welcomeLogo} alt="pets" className={styles.logo} />
        </div>
      </div>
    </Content>
  );
};
