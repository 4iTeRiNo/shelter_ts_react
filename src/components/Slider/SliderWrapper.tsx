import {Dispatch, useEffect, useRef, useState} from 'react';
import {pet} from '../../types';
import styles from './Slider.module.scss';
import {SlidersGroup} from './SliderGroups';
import {FadeInAnimation} from '../../utils/animation.js';

interface SliderWrapperProps {
  pets: pet[];
  sliders: number;
  setSliders: Dispatch<React.SetStateAction<number>>;
}
export const SliderWrapper = ({pets, sliders, setSliders}: SliderWrapperProps) => {
  const [prev, setPrev] = useState(0);
  const [next, setNext] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const animate = new FadeInAnimation(ref.current);
    animate.start(1000);

    return () => {
      animate.stop();
    };
  }, [prev, next]);

  return (
    <div className={styles.wrapperSlider}>
      <div className={styles.arrow}>
        <button
          className={styles.left}
          onClick={() => setPrev(prev + 1)}
        ></button>
      </div>
      <div
        ref={ref}
        className={styles.windowCard}
      >
        <SlidersGroup
          arr={pets}
          sliders={sliders}
          setSliders={setSliders}
        />
      </div>
      <div className={styles.arrow}>
        <button
          className={styles.right}
          onClick={() => setNext(next + 1)}
        ></button>
      </div>
    </div>
  );
};
