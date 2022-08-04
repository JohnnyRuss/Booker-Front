import styles from './description.module.scss';

function Description() {
  return (
    <div className={styles.description}>
      <p className={styles.descriptionSlogan}>a lifetime of discount ? it's genius</p>
      <p className={styles.descriptionInfo}>
        get rewarded for your travels - unlock instant savings of 10% or more with a free Booker
        account
      </p>
    </div>
  );
}

export default Description;
