import React from 'react';
import styles from './Pagination.module.scss';
import { SliderCard, SliderCardProps } from '../Slider/SliderCard';
import { pets } from "../../mock/dataPets";
import { Content } from '../Content';
import { HeaderTag } from '../HeaderTag';


interface PaginationProps {
  slides: Array<SliderCardProps>
  onNextPageClick: () => void;
  onPrevPageClick: () => void;
  disable: {
    left: boolean;
    right: boolean;
  };
  nav?: {
    current: number;
    total: number;
  };
};

const Pagination = (props: PaginationProps) => {
  const { nav = null, disable, onNextPageClick, onPrevPageClick } = props;

  const handleNextPageClick = () => {
    onNextPageClick()
  };

  const handlePrevPageClick = () => {
    onPrevPageClick()
  };

  return (

    <section className={styles.wrapper}>
      <Content>

        <HeaderTag
          tagName='h3'
          color='dark'
          size='small'
          children='Our friends who are looking for a house' />
        <div className={styles.wrapper}>
          {pets.map((slide: any, index: number) => {
            return <SliderCard key={index} {...slide} />;
          })}

          <div className={styles.paginator}>
            <div className={styles.arrow}>
              <button className={styles.left} ></button>
            </div>
            <div className={styles.arrow}>
              <button className={styles.left} ></button>
            </div>
            {/* <div className={styles.arrow}>
          <button className={styles.left} ></button>
        </div> */}
            {nav && (
              <span className={styles.navigation} >
                {nav.current} 1 {nav.total}
              </span>
            )}
            <div className={styles.arrow}>
              <button className={styles.right} ></button>
            </div>
            <div className={styles.arrow}>
              <button className={styles.right} ></button>
            </div>
          </div>
        </div>

      </Content>
    </section>
  )
};

export default Pagination