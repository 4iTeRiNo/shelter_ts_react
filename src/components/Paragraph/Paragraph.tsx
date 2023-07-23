import { ComponentPropsWithoutRef } from "react";
import styles from "./Paragraph.module.scss";

interface ParagraphProps extends ComponentPropsWithoutRef<"p"> {
  text: string;
}

export const Paragraph = ({ text, ...rest }: ParagraphProps) => {
  return (
    <>
      <p className={styles.paragraph} {...rest}>
        {text}
      </p>
    </>
  );
};
