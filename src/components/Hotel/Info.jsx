import { useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';
import styles from './info.module.scss';
import { BTN } from '../Layouts';

function Info({ data }) {
  const { date } = useContext(SearchContext);
  const { daysAmount, totalPrice } = calcDaysAndPrice(date[0], data?.minPrice);

  function calcDaysAndPrice(date, price) {
    const PER_DAY = 1000 * 60 * 60 * 24;
    const dateDiff = Math.abs(
      new Date(date?.endDate).getTime() - new Date(date?.startDate).getTime()
    );

    const daysAmount = Math.ceil(dateDiff / PER_DAY);
    const totalPrice = daysAmount * price;

    return { daysAmount, totalPrice };
  }

  return (
    <div className={styles.info}>
      <div className={styles.infoSide}>
        <h4 className={styles.title}>{data?.title}</h4>
        <p className={styles.infoText}>{data?.description}</p>
      </div>
      {date[0] && (
        <div className={styles.offerBox}>
          <p className={styles.offerTitle}>perfect for a {daysAmount}-night stay!</p>
          <p className={styles.offerDescrption}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit delectus, tempore est
            nobis numquam dolor ut veritatis facere ad nemo.
          </p>
          <p className={styles.offerPrice}>
            <span className={styles.price}>${totalPrice}</span>
            <span className={styles.priceExtra}>({daysAmount}night)</span>
          </p>
          <BTN caption='reserve or book now' className={styles.btn} />
        </div>
      )}
    </div>
  );
}

export default Info;
