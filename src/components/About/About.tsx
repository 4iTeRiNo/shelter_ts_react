import { Content } from "../Content";
import { HeaderTag } from "../HeaderTag";
import { Paragraph } from "../Paragraph";
import styles from "./About.module.scss";
import aboutLogo from "../../assets/about/about-pets.png";

export const About = () => {
  return (
    <section className={styles.background}>
      <Content>
        <div className={styles.about}>
          <div className={styles.svgContainer}>
            <img src={aboutLogo} alt="pets" className={styles.logo} />
          </div>
          <div className={styles.wrapper}>
            <HeaderTag tagName="h3" children="About the shelter “Cozy House”" />
            <Paragraph
              text={
                "Currently we have 121 dogs and 342 cats on our hands and statistics show that only 20% of them will find a family. The others will continue to live with us and will be waiting for a lucky chance to become dearly loved."
              }
            />
            <Paragraph text="We feed our wards with the best food and make sure that they do not get sick, feel comfortable (including psychologically) and well. We are supported by 87 volunteers and 28 employees of various skill levels. About 12% of the animals are taken by the shelter staff. Taking care of the animals, they become attached to the pets and would hardly ever leave them alone." />
          </div>
        </div>
      </Content>
    </section>
  );
};
