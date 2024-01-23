import {pet} from '../../types';
import {getRandomNumber} from '../../utils/getRandomNumber';
import {SliderCard} from './SliderCard';
import styles from './Slider.module.scss';
import {Dispatch, LegacyRef, useCallback} from 'react';
import useResizeObserver from '../../hooks/UseResize';
import {SCREEN_LG, SCREEN_MD} from '../constants';
import classNames from 'classnames';

interface SlidersGroupProps {
  arr: pet[];
  sliders: number;
  setSliders: Dispatch<React.SetStateAction<number>>;
  nextSlide?: number;
  prevSlide?: number;
  isPressed?: boolean;
}
export const SlidersGroup = ({arr, sliders, setSliders}: SlidersGroupProps) => {
  const valueNumber = getRandomNumber(1, 8, sliders);
  const sliderPets = arr.filter((item) => valueNumber.some((slide) => slide === item.id));
  const onResize = useCallback(
    (target: HTMLDivElement) => {
      const width = target.offsetWidth;

      if (width > SCREEN_LG) return setSliders(3);

      return width < SCREEN_MD ? setSliders(1) : setSliders(2);
    },
    [setSliders],
  );

  const sliderGroup = useResizeObserver(onResize);
  return (
    <div
      ref={sliderGroup}
      className={classNames(styles.sliderGroup)}
    >
      {sliderPets.map((slide) => (
        <SliderCard
          key={slide.id}
          {...slide}
        />
      ))}
    </div>
  );
};
