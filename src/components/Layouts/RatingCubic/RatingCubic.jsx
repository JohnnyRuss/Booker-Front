import styles from './ratingCubic.module.scss';

function RatingCubic({ rating, className }) {
  return <span className={`${styles.ratingCubic} ${className}`}>{rating}</span>;
}

export default RatingCubic;
