import styles from './itemActions.module.scss';
import { RatingCubic, BTN } from '../../Layouts';

function ItemActions({ data }) {
  return (
    <div className={styles.actions}>
      <div className={styles.rating}>
        <span>{data?.rating?.rate}</span>
        <RatingCubic rating={data?.rating?.point} />
      </div>
      <span className={styles.price}>${data?.minPrice}</span>
      <span className={styles.priceDetails}>includes taxes and fees</span>
      <BTN caption='see availability' className={styles.btn} />
    </div>
  );
}

export default ItemActions;
