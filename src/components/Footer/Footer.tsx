import { Content } from "../Content";
import { LocalInfo } from "../LocalInfo";
import styles from "./Footer.module.scss";

interface FooterProps {}

export const Footer = () => {
  return (
    <Content>
      <LocalInfo />
    </Content>
  );
};
