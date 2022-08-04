import styles from './sliderFigure.module.scss';

function SliderFigure({ images, sliderIndex }) {
  return (
    <figure className={styles.sliderFigure}>
      <img
        src={images[sliderIndex]}
        alt={images[sliderIndex]}
        className={styles.sliderImage}
      />
    </figure>
  );
}

export default SliderFigure;
