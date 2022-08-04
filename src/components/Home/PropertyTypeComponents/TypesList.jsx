import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { uid } from 'uid';

import { SearchContext } from '../../../context/SearchContext';

import styles from './typesList.module.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Card } from '../../Layouts';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1480 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1480, min: 960 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 960, min: 680 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 680, min: 0 },
    items: 1,
  },
};

function TypesList({ data }) {
  const { dispatchSearch } = useContext(SearchContext);
  const navigate = useNavigate();

  function handleRoute(type) {
    const nextDay = new Date().setDate(new Date().getDate() + 1);
    const routeProps = {
      type,
      date: [
        {
          key: 'selection',
          startDate: new Date(),
          endDate: new Date(nextDay),
        },
      ],
    };

    dispatchSearch({ type: 'SET_STATE', payload: routeProps });

    navigate('/hotels', { state: routeProps });
  }

  return (
    <div className={styles.typesBox}>
      <h3 className={styles.typesTitle}>browse by property types</h3>
      <Carousel
        responsive={responsive}
        showDots={true}
        slidesToSlide={1}
        containerClass={styles.carouselContainer}
        dotListClass={styles.carouselDots}
        itemClass={styles.carouselItem}>
        {data?.map((type) => (
          <Card
            img={type?.image[0]}
            title={type?._id}
            caption={`${type?.apartments} hotels`}
            className={styles.ratedCard}
            onClick={() => handleRoute(type._id)}
            key={uid(6)}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default TypesList;
