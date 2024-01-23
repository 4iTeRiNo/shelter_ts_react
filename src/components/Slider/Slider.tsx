import {Button} from '../Button';
import {Content} from '../Content';
import {HeaderTag} from '../HeaderTag';
import styles from './Slider.module.scss';
import {useState} from 'react';
import {pets} from '../../mock/dataPets';
import {useNavigate} from 'react-router-dom';

import {SliderWrapper} from './SliderWrapper';

export const Slider = () => {
  const navigate = useNavigate();
  const [sliders, setSliders] = useState(3);

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
          <SliderWrapper
            pets={pets}
            setSliders={setSliders}
            sliders={sliders}
          />
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
