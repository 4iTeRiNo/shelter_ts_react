import { Content } from "../Content";
import { HeaderTag } from "../HeaderTag";
import { Paragraph } from "../Paragraph";
import DonationLogo from "../../assets/donation/donation-dog.png";
import styles from "./Donation.module.scss";

export const Donation = () => {
  return (
    <section className={styles.background}>
      <Content>
        <div className={styles.donation}>
          <div className={styles.svgContainer}>
            <img src={DonationLogo} alt="pets" className={styles.logo} />
          </div>
          <div className={styles.wrapper}>
            <HeaderTag tagName="h3" children="You can also make a donation" />
            <span>Name of the bank / Type of bank account</span>
            <button className={styles.button}>8380 2880 8028 8791 7435</button>
            <Paragraph
              text={
                "Currently we have 121 dogs and 342 cats on our hands and statistics show that only 20% of them will find a family. The others will continue to live with us and will be waiting for a lucky chance to become dearly loved."
              }
            />
            <Paragraph text="Legal information and lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed ac diam. Praesent ultrices maximus tortor et vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus." />
          </div>
        </div>
      </Content>
    </section>
  );
};
