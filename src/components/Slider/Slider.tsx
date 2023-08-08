import { Button } from "../Button";
import { Content } from "../Content";
import { HeaderTag } from "../HeaderTag";
import styles from "./Slider.module.scss";
import { SliderCard, SliderCardProps } from "./SliderCard";
import { useState } from "react";
import { pets } from "../../mock/dataPets";
import { log } from "console";
import { pet } from "../../types";

interface SliderProps {
  slides: Array<SliderCardProps>;
}

export const Slider = (props: SliderProps) => {
  // const [item, setItem] = useState([]);
  const [offset, setOffset] = useState(0);
  // const [currentIndex, setCurrentIndex] = useState(0);

  const COUNT_CARD = 3;

  function createCardGroup(arr: pet[]) {
    const result = [];
    for (
      let i = 0, count = COUNT_CARD;
      i < arr.length;
      i += COUNT_CARD, count += COUNT_CARD
    ) {
      result.push(arr.slice(i, count));
    }

    return result.map((item, i) => {
      return (
        <ul
          className={styles.cardContainer}
          key={i}
          // style={{ order: `${i + 1}` }}
        >
          {item.map((slide, index) => {
            return <SliderCard key={index} {...slide} />;
          })}
        </ul>
      );
    });
  }

  // useState(currentIndex) => {
  // }

  const nextSlide = () => {
    setOffset((currentOffset) => {
      let newOffset = currentOffset - 100;
      if (currentOffset === newOffset - currentOffset)
        return (newOffset = currentOffset + 200);
      return newOffset;
    });
  };
  const prevSlide = () => {
    setOffset((currentOffset) => {
      let newOffset = currentOffset + 100;
      if (currentOffset === newOffset - currentOffset)
      return (newOffset = currentOffset - 200);
      // console.log(currentOffset);
      
      return newOffset;
    });
  };
  // const changeSlide = (direction = 1) => {
  //   let slideNumber = 0;

  //   if (slide + direction < 0) {
  //     slideNumber = item.length - 1;
  //     console.log('aa');

  //   } else {
  //     slideNumber = (slide + direction) % item.length;
  //     console.log('bb');
  //   }
  //   setSlide(slideNumber);
  // };

  // const goToSlide = (number: number) => {
  //   setSlide(number % item.length);
  // };

  // type SliderHook = (
  //   lenght: number,
  //   step?: number,
  //   isInfinite?: boolean
  // ) => {
  //   callback: (direction: "next" | "prev") => void;
  //   next: boolean;
  //   prev: boolean;
  // };

  return (
    <section className={styles.background}>
      <div className={styles.wrapper}>
        <Content>
          <HeaderTag
            color="dark"
            size="small"
            tagName="h3"
            children="Our friends who
          are looking for a house"
          />
          {
            <div className={styles.wrapperCard}>
              <div className={styles.arrow}>
                <button className={styles.left} onClick={prevSlide}></button>
              </div>
              <div className={styles.window}>
                <ul
                  className={styles.allCard}
                  style={{
                    transform: `translateX(${offset}%)`,
                  }}
                >
                  {createCardGroup(pets)}
                </ul>
              </div>
              <div className={styles.arrow}>
                <button className={styles.right} onClick={nextSlide}></button>
              </div>
            </div>
          }
          <Button children="Get to know the rest" />
        </Content>
      </div>
    </section>
  );
};
