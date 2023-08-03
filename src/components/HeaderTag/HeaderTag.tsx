import styles from "./HeaderTag.module.scss";
import { createElement } from "react";
import cn from "classnames";

interface HeaderTagProps {
  tagName: keyof JSX.IntrinsicElements;
  children: string;
}

export const HeaderTag = ({ tagName, children }: HeaderTagProps) => {
  return createElement(
    tagName,
    {
      className: cn(styles.general, {
        [styles.general__h1]: tagName === "h1",
        [styles.general__h2]: tagName === "h2",
        [styles.general__h3]: tagName === "h3",
      }),
    },
    children
  );
};
