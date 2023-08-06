import { ComponentPropsWithoutRef } from "react";
import styles from "./Paragraph.module.scss";
import cn from "classnames";

interface ParagraphProps extends ComponentPropsWithoutRef<"p"> {
  text: string;
  color: "white" | "grey" | "dark";
  size: "small" | "meddle";
  style?: React.CSSProperties;
}

export const Paragraph = ({
  text,
  color = "dark",
  size = "meddle",
  className,
}: ParagraphProps) => {
  return (
    <>
      <p
        className={cn(styles.general, className, {
          [styles.white]: color === "white",
          [styles.dark]: color === "dark",
          [styles.grey]: color === "grey",
          [styles.small]: size === "small",
          [styles.meddle]: size === "meddle",
        })}
      >
        {text}
      </p>
    </>
  );
};
