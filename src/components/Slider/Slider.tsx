import { Button } from "../Button";
import { Content } from "../Content";
import { HeaderTag } from "../HeaderTag";
import styles from "./Slider.module.scss";
import { SliderCard, SliderCardProps } from "./SliderCard";
import ImgJennifer from "../../../assets/pets/jennifer.png";
import ImgKatrine from "../../../assets/pets/katrine.png";
import ImgWoody from "../../../assets/pets/woody.png";
import ImgSophia from "../../../assets/pets/sophia.png";
import ImgTimmy from "../../../assets/pets/timmy.png";
import ImgCharlie from "../../../assets/pets/charly.png";
import ImgScarlet from "../../../assets/pets/scarlet.png";
import ImgFreddie from "../../../assets/pets/freddie.png";
import { useState } from "react";
import { pets } from "../../mock/dataPets";


interface SliderProps extends SliderCardProps {}

export const Slider = (props: SliderProps) => {
  // const [item, setItem] = useState([])
  // const [slide, setSlide] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0);


  // const changeSlide = (direction = 1) => {
  //   let slideNumber = 0;

  //   if(slide + direction < 0) {
  //     slideNumber = item.length - 1
  //   } else {
  //     slideNumber = (slide + direction) % item.length
  //   }
  //   setSlide(slideNumber)
  // }

  // const goToSlide = (number) => {
  //   setSlide(number % item.length)
  // }

  const prevSlide = () =>
  setCurrentIndex(currentIndex === 0 ? pets.length - 1 : currentIndex - 1);

 const nextSlide = () =>
  setCurrentIndex(currentIndex === 0 ? pets.length - 1 : currentIndex + 1);


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
          <Content>
            {
              <div className={styles.wrapperCard}>
                <div className={styles.container}>
                  <SliderCard img={ImgCharlie} name={props.name} />
                  <SliderCard img={ImgFreddie} name={props.name} />
                  <SliderCard img={ImgJennifer} name={props.name} />
                </div>
                <div className={styles.container}>
                  <SliderCard img={ImgKatrine} name={props.name} />
                  <SliderCard img={ImgScarlet} name={props.name} />
                  <SliderCard img={ImgSophia} name={props.name} />
                </div>
                <div className={styles.container}>
                  <SliderCard img={ImgWoody} name={props.name} />
                  <SliderCard img={ImgTimmy} name={props.name} />
                  <SliderCard img={ImgKatrine} name={props.name} />
                </div>
              </div>
            }
            <div className={styles.arrow}>
              <button className={styles.left} onClick={prevSlide}></button>
            </div>
            <div className={styles.arrow}>
              <button className={styles.right} onClick={nextSlide}></button>
            </div>
          </Content>
          <Button children="Get to know the rest" />
        </Content>
      </div>
    </section>
  );
};
