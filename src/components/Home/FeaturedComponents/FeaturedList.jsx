import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { SearchContext } from '../../../context/SearchContext';

import styles from './featuredList.module.scss';
import { Card } from '../../Layouts';

function FeaturedList({ data }) {
  const { dispatchSearch } = useContext(SearchContext);
  const navigate = useNavigate();

  function handleRoute(city) {
    const nextDay = new Date().setDate(new Date().getDate() + 1);
    const routeProps = {
      destination: city,
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
    <div className={styles.featuredList}>
      {data?.map((feature) => (
        <Card
          img={feature?.image[0]}
          title={`${feature?.country} ${feature?.city}`}
          caption={`${feature?.apartments} properties`}
          properties={{
            absolute: true,
            blured: true,
          }}
          className={styles.card}
          onClick={() => handleRoute(feature?.city)}
          key={feature?.image[0]}
        />
      ))}
    </div>
  );
}

export default FeaturedList;
