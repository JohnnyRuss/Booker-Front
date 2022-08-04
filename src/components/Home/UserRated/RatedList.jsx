import { uid } from 'uid';
import { Link } from 'react-router-dom';
import styles from './ratedList.module.scss';
import { DetailedCard } from '../../Layouts';

function RatedList({ data }) {
  return (
    <div className={styles.rated}>
      <h3 className={styles.title}>homes guests love</h3>
      <div className={styles.ratedList}>
        {data?.map((property) => (
          <Link to={`/hotels/${property._id}`} key={uid(6)}>
            <DetailedCard
              img={property?.images?.url?.[0]}
              title={property?.name}
              caption={property?.location?.city}
              description={`starting from $${property?.minPrice}`}
              rating={{
                point: property?.rating?.point,
                rate: property?.rating?.rate,
              }}
              properties={{
                titleSize: '1.5rem',
              }}
              className={styles.ratedCard}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RatedList;
