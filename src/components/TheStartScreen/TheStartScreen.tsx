import styles from "./TheStartScreen.module.scss";
import { ReactComponent as ReactLogo } from "../../assets/welcome/start-screen-puppy.svg";
import { Paragraph } from "../Paragraph";
import { Htag } from "../Htag";
import { Button } from "../Button";

export const TheStartScreen = () => {
  return (
    <div className={styles.welcome}>
      <div className={styles.wrapper}>
        <Htag tag="h1" children="Not only people need a house" />
        <Paragraph
          text={
            "We offer to give a chance to a little and nice puppy with an extremely wide and open heart. He or she will love you more than anybody else in the world, you will see!"
          }
        />
        <Button children="Make a friend"/>
      </div>
      <ReactLogo className={styles.logo}/>
    </div>
  );
};
