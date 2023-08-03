import { useEffect, useState } from "react";
import { Button } from "../Button";
import { Content } from "../Content";
import { HeaderTag } from "../HeaderTag";
import { SliderSwapper } from "../SliderSwapper";
import styles from "./Slider.module.scss";
import { SliderCardProps } from "../SliderCard";
import { pet } from "../../mock/pets";

interface SliderProps extends SliderCardProps {}

export const Slider = (props: SliderProps) => {
  return (
    <section className={styles.background}>
      <div className={styles.wrapper}>
        <Content>
          <HeaderTag
            tagName="h3"
            children="Our friends who
          are looking for a house"
          />
          <Button children="Get to know the rest" />
        </Content>
      </div>
    </section>
  );
};
