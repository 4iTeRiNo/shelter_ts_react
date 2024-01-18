import {Button} from '../Button';
import {Content} from '../Content';
import {HeaderTag} from '../HeaderTag';
import styles from './Slider.module.scss';
import {SliderCard, SliderCardProps} from './SliderCard';
import {ReactNode, useEffect, useState} from 'react';
import {pets} from '../../mock/dataPets';
import {pet} from '../../types';
import {useNavigate} from 'react-router-dom';

// interface SliderProps {
//   slides: Array<SliderCardProps>;
// }

export const Slider = () => {
  const navigate = useNavigate();
  const numberOfSliders = Math.floor(pets.length / 3);

  // const [offset, setOffset] = useState(0);
  const [sliders, setSliders] = useState(numberOfSliders);
  const [count, setCount] = useState(0);
  // const { width, isScreenSm, isScreenMd, isScreenLg, isScreenXl } = useResize();

  function createCardGroup(arr: pet[]) {
    const sliderGroup = [];
    for (let i = 0; i < arr.length; i += sliders) {
      sliderGroup.push(pets.slice(i, i + sliders));
    }
    return sliderGroup.map((item, index) => {
      return (
        <div className={styles.sliderGroup}>
          {item.map((slide) => (
            <SliderCard
              key={slide.id}
              {...slide}
            />
          ))}
        </div>
      );
    });
  }

  const nextSlide = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setCount(count - 1);
    if (count === -1) setCount(1);
  };

  const prevSlide = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setCount(count + 1);
    if (count === 1) setCount(-1);
  };

  const handelClick = () => {
    window.location.href = '/ourPets';
  };

  return (
    <section
      id='slider'
      className={styles.background}
    >
      <Content>
        <div className={styles.wrapper}>
          <HeaderTag
            color='dark'
            size='small'
            tagName='h3'
            children='Our friends who
          are looking for a house'
          />
          {
            <div className={styles.wrapperSlider}>
              <div className={styles.arrow}>
                <button
                  className={styles.left}
                  onClick={prevSlide}
                ></button>
              </div>
              <div className={styles.windowCard}>
                <ul
                  className={styles.allCard}
                  style={{
                    transform: `translateX(${count * 100}%)`,
                  }}
                >
                  {createCardGroup(pets)}
                </ul>
              </div>
              <div className={styles.arrow}>
                <button
                  className={styles.right}
                  onClick={nextSlide}
                ></button>
              </div>
            </div>
          }
          <Button
            type='button'
            onClick={() => navigate('/ourPets', {replace: false})}
            children='Get to know the rest'
          />
        </div>
      </Content>
    </section>
  );
};
