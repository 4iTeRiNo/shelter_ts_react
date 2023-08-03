import styles from "./SliderCard.module.scss";
import { pets } from "../../types";
import { pet } from "../../mock/pets";

export interface SliderCardProps extends Pick<pets, "img" | "name"> {}

export const SliderCard = ({ img, name }: SliderCardProps) => {
  return (
    <div className={styles.sliderCard}>
      <figure>
        <img src={img} alt="petsPhoto" />
        <figcaption>{name}</figcaption>
      </figure>
      <button>Learn more</button>
    </div>
  );
};
