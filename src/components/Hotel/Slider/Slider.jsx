import styles from './slider.module.scss';
import SliderFigure from './SliderFigure';
import SliderList from './SliderList';
import SliderBTN from './SliderBTN';

function Slider({ closeSliderModal, handleSlider, handleSliderFromNest, sliderIndex, images }) {
  return (
    <div className={styles.sliderModal} onClick={closeSliderModal}>
      <div className={styles.sliderContent}>
        <SliderFigure images={images} sliderIndex={sliderIndex} />
        <SliderList
          images={images}
          sliderIndex={sliderIndex}
          handleSliderFromNest={handleSliderFromNest}
        />
        <SliderBTN handleSlider={handleSlider} closeSliderModal={closeSliderModal} />
      </div>
    </div>
  );
}

export default Slider;
