import styles from "./HeaderTag.module.scss";
import { createElement } from "react";

interface HeaderTagProps {
  tagName: keyof JSX.IntrinsicElements;
  children: string;
}

export const HeaderTag = ({ children, tagName, ...rest }: HeaderTagProps) => {
  return createElement(tagName, { className: styles.general }, children);
};
