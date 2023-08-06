import styles from "./TheLogo.module.scss";

interface TheLogoProps {
  logo: string;
  someTextBelow: string;
}

export const TheLogo = ({ logo, someTextBelow }: TheLogoProps) => {
  return (
    <div className={styles.container}>
      <a href="/" className={styles.logo}>
        {logo}
      </a>
      <span className={styles.span}>{someTextBelow}</span>
    </div>
  );
};
