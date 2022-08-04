import { uid } from 'uid';
import styles from './sliderList.module.scss';

function SliderList({ images, sliderIndex, handleSliderFromNest }) {
  return (
    <div className={styles.sliderList}>
      {images.map((img, i) => (
        <figure className={styles.sliderFigureMini} key={uid(6)}>
          <img
            src={img}
            alt={img}
            className={`${styles.sliderImageMini} ${sliderIndex === i ? styles.active : ''}`}
            onClick={(e) => handleSliderFromNest(e, i)}
          />
        </figure>
      ))}
    </div>
  );
}

export default SliderList;
