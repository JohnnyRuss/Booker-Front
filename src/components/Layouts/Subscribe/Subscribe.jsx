import styles from './subscribe.module.scss';
import { BTN } from '../';

function Subscribe() {
  return (
    <div className={styles.subscribeContainer}>
      <div className={styles.subscribe}>
        <h4 className={styles.title}>save time, save money !</h4>
        <p className={styles.description}>sign up and we'll send the best details to you</p>
        <form className={styles.form}>
          <input type='email' placeholder='your email' className={styles.inp} />
          <BTN caption='subscribe' />
        </form>
      </div>
    </div>
  );
}

export default Subscribe;
