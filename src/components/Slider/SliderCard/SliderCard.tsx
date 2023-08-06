import { pet } from "../../../types";
import styles from "./SliderCard.module.scss";


export interface SliderCardProps extends Pick<pet, "img" | "name"> {}

export const SliderCard = ({ img, name }: SliderCardProps) => {
  return (
    <div className={styles.sliderCard}>
      <figure>
        <img src={img} alt={name} />
        <p>{name}</p>
      </figure>
      <button className={styles.button}>Learn more</button>
    </div>
  );
};
