import { pet } from "../../../types";
import styles from "./SliderCard.module.scss";

export interface SliderCardProps extends Pick<pet, "img" | "name"> {}

export const SliderCard = ({ img, name }: SliderCardProps) => {

  const handleClick = () => {
    console.log('hello');
    
  }
  return (
    <li className={styles.sliderCard}>
      <figure>
        <img src={img} alt={name} />
      </figure>
      <figcaption>{name}</figcaption>
      <button className={styles.button} onClick={handleClick}>Learn more</button>
    </li>
  );
};
