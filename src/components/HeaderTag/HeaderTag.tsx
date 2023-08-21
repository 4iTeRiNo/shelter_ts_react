import styles from "./HeaderTag.module.scss";
import {
  DetailedHTMLProps,
  HTMLAttributes,
  ReactNode,
  createElement,
} from "react";
import cn from "classnames";

interface HeaderTagProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  tagName: keyof JSX.IntrinsicElements;
  children: ReactNode;
  color: "white" | "dark";
  size: "small" | "meddle";
  href?: string;
}

export const HeaderTag = ({
  tagName,
  color = "dark",
  size = "meddle",
  children,
  className,
}: HeaderTagProps) => {
  return createElement(
    tagName,
    {
      className: cn(styles.general, className, {
        [styles.white]: color === "white",
        [styles.dark]: color === "dark",
        [styles.small]: size === "small",
        [styles.meddle]: size === "meddle",
      }),
    },
    children,
  );
};
