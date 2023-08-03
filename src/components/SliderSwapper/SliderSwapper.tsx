import { pet } from "../../mock/pets";
import { Content } from "../Content";
import { SliderCard, SliderCardProps } from "../SliderCard";
import styles from "./SliderSwapper.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";

interface SliderSwapperProps extends SliderCardProps {}

export const SliderSwapper = (props: SliderSwapperProps) => {
  return (
    <Content>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <SliderCard img={props.img} name={props.name} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard img={props.img} name={props.name} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard img={props.img} name={props.name} />
        </SwiperSlide>
      </Swiper>
    </Content>
  );
};
// <Content >
//  <div className={styles.wrapper}>
//   <button>/\ad/</button>
//   <div className={styles.container}>
//     <div>asdf</div>
//     <div>adf</div>
//     <div>asdf</div>
//   </div>
//   <button>asd</button>
//  </div>
// </Content>
