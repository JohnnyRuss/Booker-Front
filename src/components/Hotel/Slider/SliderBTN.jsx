import styles from './sliderBtn.module.scss';
import { IoIosArrowBack, IoIosArrowForward, IoIosClose } from 'react-icons/io';

function SliderBTN({ handleSlider, closeSliderModal }) {
  return (
    <>
      <button className={`${styles.btn} ${styles.left}`} name='left' onClick={handleSlider}>
        <IoIosArrowBack />
      </button>
      <button className={`${styles.btn} ${styles.right}`} name='right' onClick={handleSlider}>
        <IoIosArrowForward />
      </button>
      <button className={`${styles.btn} ${styles.close}`} onClick={closeSliderModal}>
        <IoIosClose />
      </button>
    </>
  );
}

export default SliderBTN;
