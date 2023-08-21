import { Button } from "../Button";
import { Content } from "../Content";
import { HeaderTag } from "../HeaderTag";
import styles from "./Slider.module.scss";
import { SliderCard, SliderCardProps } from "./SliderCard";
import { ReactNode, useEffect, useState } from "react";
import { pets } from "../../mock/dataPets";
import { pet } from "../../types";
import { useResize } from "../../utils/use-resize";

interface SliderProps {
  slides: Array<SliderCardProps>;
}

const PAGE_WIDTH = 1104;

export const Slider = (props: SliderProps) => {
  const result = new Array();
  const [offset, setOffset] = useState(0);
  // const [slide, setSlide] = useState(result)

  // const { width, isScreenSm, isScreenMd, isScreenLg, isScreenXl } = useResize();

  function getCardRender() {
    return createCardGroup(pets, 3)
  }

  function createCardGroup(arr: pet[], COUNT_CARD: number) {
    for (
      let i = 0, count = COUNT_CARD;
      i < arr.length;
      i += COUNT_CARD, count += COUNT_CARD
    ) {
      result.push(arr.slice(i, count));
    }
    return result.map((item, i) => {
      return (
        <div
          className={styles.cardContainer}
          key={i}
        >
          {item.map((slide: any, index: number) => {
            return <SliderCard key={index} {...slide} />;
          })}
        </div>
      );
    });
  }


  // useEffect(() => {
  //   console.log(slide[1]);
  // }, [slide])

  const nextSlide = () => {
    setOffset((currentOffset) => {
      let newOffset = currentOffset - PAGE_WIDTH;
      console.log(currentOffset);
      return newOffset;
    });
  };

  const prevSlide = () => {
    setOffset((currentOffset) => {
      let newOffset = currentOffset + PAGE_WIDTH;
      console.log(currentOffset);
      return newOffset;
    });
  };

  return (
    <section className={styles.background}>
      <Content>
        <div className={styles.wrapper}>
          <HeaderTag
            color="dark"
            size="small"
            tagName="h3"
            children="Our friends who
          are looking for a house"
          />
          {
            <div className={styles.wrapperSlider}>
              <div className={styles.arrow}>
                <button className={styles.left} onClick={prevSlide}></button>
              </div>
              <div className={styles.windowCard}>
                <ul
                  className={styles.allCard}
                  style={{
                    transform: `translateX(${offset}px)`,
                  }}
                >
                  {getCardRender()}
                </ul>
              </div>
              <div className={styles.arrow}>
                <button className={styles.right} onClick={nextSlide}></button>
              </div>
            </div>
          }
          <Button children="Get to know the rest" />
        </div>
      </Content>
    </section>
  );
};
