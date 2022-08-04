import { useLocation } from 'react-router-dom';

import { useGetJSON } from '../../hooks';

import styles from './ResultsComponents/results.module.scss';
import ResultsList from './ResultsComponents/ResultsList';

function Results() {
  //prettier-ignore
  const {destination, minPrice, maxPrice, type} = useLocation().state
  const destinationQuery = destination ? `location.city=${destination.toLowerCase()}` : '';
  const minPriceQuery = minPrice ? `minPrice[gte]=${minPrice}` : '';
  const maxPriceQuery = maxPrice ? `maxPrice[lte]=${maxPrice}` : '';
  const typeQuery = type ? `type=${type}` : '';
  const query = [destinationQuery, minPriceQuery, maxPriceQuery, typeQuery].join('&');

  const { data } = useGetJSON(`/hotels/all${query ? `?${query}` : ''}`);

  return (
    <div className={styles.results}>
      <ResultsList data={data} />
    </div>
  );
}

export default Results;
